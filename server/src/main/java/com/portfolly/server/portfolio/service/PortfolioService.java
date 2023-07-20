package com.portfolly.server.portfolio.service;

import com.portfolly.server.bookmark.repository.BookmarkRepository;
import com.portfolly.server.category.repository.CategoryRepository;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.likes.repository.LikesRepository;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.picture.entity.Picture;
import com.portfolly.server.picture.repository.PictureRepository;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.mapper.PortfolioMapper;
import com.portfolly.server.portfolio.repository.PortfolioRepository;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PortfolioService {
    private final PortfolioMapper portfolioMapper;
    private final PortfolioRepository portfolioRepository;
    private final MemberService memberService;
    private final BookmarkRepository bookmarkRepository;
    private final LikesRepository likesRepository;
    private final PictureRepository pictureRepository;
    private final CategoryRepository categoryRepository;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    //포트폴리오 등록
    public Portfolio postPortfolio(PortfolioDto.Post postDto, String accessToken){
        Long memberId = findMemberId(accessToken);
        Member member = memberService.findMember(memberId);
        //이미지 연관관계 picture entity에 portfolioId 를 넣어준다
        Portfolio portfolio = portfolioMapper.postDtoToPortfolio(postDto);
        portfolio.setStatus(Portfolio.Status.ACTIVE);
        portfolio.setMember(member);
        portfolio.setCategory(categoryRepository.findByName(postDto.getCategory()).orElseThrow(()->new RuntimeException()));
        portfolioRepository.save(portfolio);
        return portfolio;
    }

    //포트폴리오 수정
    public Portfolio updatePortfolio(PortfolioDto.Patch patchDto, String accessToken){
        Portfolio findedPortfolio = findVerifiedPortfolio(patchDto.getId());
        Long memberId = findMemberId(accessToken);
//        Member member = memberService.findMember(memberId);
        //작성자가 맞는지 체크
        if(memberId == findedPortfolio.getMember().getId()){
            findedPortfolio.setTitle(patchDto.getTitle());
            findedPortfolio.setContent(patchDto.getContent());
            findedPortfolio.setExplains(patchDto.getExplains());
            findedPortfolio.setCategory(categoryRepository.findByName(patchDto.getCategory().trim()).orElseThrow(()->new BusinessLogicException(ExceptionCode.CATEGORY_NOT_FOUND)));
            portfolioRepository.save(findedPortfolio);
        }else{
            throw new RuntimeException("작성자가 아닙니다");
        }
        return findedPortfolio;
    }


    //포트폴리오 상세 조회, 조회수 증가
    public PortfolioDto.Response selectPortfolio(Long portfolioId, String accessToken) {
        //1. 로그인 하지 않을 경우//2. 로그인 한 경우 ==> AccessToken의 유무
        //runtimeException
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        increaseViews(portfolio);
        PortfolioDto.Response response = portfolioMapper.portfolioToResponseDto(portfolio);
        if(!accessToken.isEmpty()) {
            Long memberId = findMemberId(accessToken);
            response.setMarked(isMarked(portfolioId, memberId));
            response.setLiked(isLiked(portfolioId, memberId));
            response.setWriter(isWriter(portfolioId, memberId));
        }
        response.setCountLikes(countLikes(response.getId()));
        response.setFirstImage(firstImageUrl(response.getId()));
        return response;
    }

    public void increaseViews(Portfolio portfolio) {
        portfolio.setView(portfolio.getView() + 1);
        portfolioRepository.save(portfolio);
    }

    //포트폴리오 전체 조회
    //web, app, 3da, graphicDesign, photo
    public Page<Portfolio> findPortfolios(int page, int size, String category) {
        //1. 로그인 하지 않을 경우//2. 로그인 한 경우 ==> AccessToken의 유무
        //파라미터를 받은 후 맞는 id를 데려옴
        Long categoryId = matchCategoryId(category);
        return portfolioRepository.findByStatusAndCategoryId(PageRequest.of(page, size, Sort.by("id").descending()), Portfolio.Status.ACTIVE, categoryId);
    }

    public void setResponse(List<PortfolioDto.Response> responses,String accessToken){
        for (PortfolioDto.Response response : responses) {
            response.setFirstImage(firstImageUrl(response.getId()));
            response.setMarked(isMarked(response.getId(), findMemberId(accessToken)));
        }
    }

    //picture에서 portfolioId 에 맞는 첫번째 이미지링크를 가져옴
    public String firstImageUrl(Long portfolioId){
        List<Picture> pictures = pictureRepository.findAllByPortfolioId(portfolioId);
        if (pictures.size() != 0) {
            String firstImage = pictures.get(0).getPictureUrl();
            return firstImage;
        }
        //else default image 추가해주어야 함(프론트에서 처리)
        else return null;
    }

    public Long matchCategoryId(String category){
        category.trim().toLowerCase();
        switch (category) {
            case "web": return 1L;
            case "app": return 2L;
            case "3da": return 3L;
            case "graphicdesign": return 4L;
            case "photo": return 5L;
            default: throw new RuntimeException("해당되는 카테고리가 없습니다.");
        }
    }


    //포트폴리오 삭제
    public void deletePortfolio(Long portfolioId, String accessToken) {
        Long memberId = findMemberId(accessToken);
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        //작성자 체크
        if(memberId!=portfolio.getMember().getId()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
        portfolio.setStatus(Portfolio.Status.DELETED);
        portfolioRepository.save(portfolio);
    }

    //isMarked
    public boolean isMarked(Long portfolioId, Long memberId) {
        //토큰 통해서 멤버 가져와야함
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
        Member member = memberService.findMember(memberId);

        return bookmarkRepository.findByMemberIdAndPortfolioId(memberId, portfolioId).isPresent() ? true : false;
    }

    //isLiked
    public boolean isLiked(Long portfolioId, Long memberId) {
        //토큰 통해서 멤버 가져와야함
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
        Member member = memberService.findMember(memberId);
        return likesRepository.findByMemberIdAndPortfolioId(memberId, portfolioId).isPresent() ? true : false;
    }


    //작성자인지 확인
    public boolean isWriter(Long portfolioId, Long memberId) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
//        Member member = memberService
        //토큰 통해서 멤버 가져와야함
        return memberId.equals(portfolio.getMember().getId()) ? true : false;
    }

    //likes count
    public int countLikes(Long portfolioId){
        // likes repository에서 해당하는 포폴을 찾아서 갯수를 센다
        List<Likes> likesList = likesRepository.findByPortfolioId(portfolioId);
        int countLikes = likesList.size();
        return countLikes;
    }


    //token에서 memberId 받기
    public Long findMemberId(String accessToken){
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken,base64EncodedSecretKey);
        Long memberId = memberService.findByMember(email).getId();
        return memberId;
    }

    public Portfolio findVerifiedPortfolio(Long portfolioId) {
        Optional<Portfolio> optionalPortfolio = portfolioRepository.findById(portfolioId);
        Portfolio findPortfolio = optionalPortfolio.orElseThrow(() -> new BusinessLogicException(ExceptionCode.PORTFOLIO_NOT_FOUND));
        return findPortfolio;
    }

    public void addPicture(Portfolio portfolio){
        //content안에 있는 링크들을 긁어 와서 해당하는 링크의 이미지를 찾아서 연관관계를 맺을 때 portforioId를 넣어준다.
        String content = portfolio.getContent();
        String domain = "https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/";
        List<String> pictureUrlList = new ArrayList<>();
        while (content.contains(domain)){
            content=content.substring(content.indexOf(domain));
            int startIdx= 0;
            int endIdx = content.indexOf('>');
            String pictureUrl = content.substring(startIdx,endIdx);
            pictureUrlList.add(pictureUrl);
            content=content.substring(endIdx);
        }
        for (String pictureUrl : pictureUrlList) {
//            Picture picture = pictureRepository.findByPictureUrl(pictureUrl).orElseThrow(()->new BusinessLogicException(ExceptionCode.PICTURE_NOT_FOUND));
            Picture picture = new Picture();
            picture.setPictureUrl(pictureUrl);
            picture.setFileName(pictureUrl.substring(pictureUrl.lastIndexOf("/")+1));
            picture.setPortfolio(portfolio);
            pictureRepository.save(picture);
        }
        //+fileName
        //List<Image> images = new ~
        //성능이슈 content 안에 저 링크를 가진 이미지들을 가지고 온다 -> ImageRepository를 이용하여 find 한다.
        //-> pictureRepository.findByPictureUrl(pictureUrl) -> 이미지들을 찾아옴
        //-> images에 이미지들을 추가
        //리스트의 사이즈 만큼 for문을 반복하여 해당하는 portfolioId를 넣어준다.
        //for(int i = 0; i<images.size(); i++) {
        //images.get(i).setPortfolio}
    }



}
