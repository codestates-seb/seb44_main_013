package com.portfolly.server.portfolio.service;

import com.portfolly.server.bookmark.repository.BookmarkRepository;
import com.portfolly.server.category.repository.CategoryRepository;
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
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

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

    //포트폴리오 등록
    public Portfolio postPortfolio(PortfolioDto.Post postDto, Long memberId){
        Member member = memberService.findMember(memberId);
        //이미지 연관관계 picture entity에 portfolioId 를 넣어준다
        Portfolio portfolio = portfolioMapper.postDtoToPortfolio(postDto);
//        Picture picture = pictureRepository.findByPortfolioId(portfolio.getId());
//        picture.setPortfolio(portfolio);
        portfolio.setStatus(Portfolio.Status.ACTIVE);
        portfolio.setMember(member);
        portfolio.setCategory(categoryRepository.findByName(postDto.getCategory()).orElseThrow(()->new RuntimeException()));
        portfolioRepository.save(portfolio);
        return portfolio;
    }

    //포트폴리오 수정
    public Portfolio updatePortfolio(PortfolioDto.Patch patchDto){
        Portfolio findedPortfolio = selectPortfolio(patchDto.getId());
//        Member member = memberService.findMember(memberId);
        findedPortfolio.setTitle(patchDto.getTitle());
        findedPortfolio.setContent(patchDto.getContent());
        findedPortfolio.setExplains(patchDto.getExplains());
        portfolioRepository.save(findedPortfolio);
        return findedPortfolio;
    }




    //포트폴리오 상세 조회, 조회수 증가
    public Portfolio selectPortfolio(Long portfolioId) {
        //runtimeException
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        return portfolio;
    }

    public void increaseViews(Portfolio portfolio) {
        portfolio.setView(portfolio.getView() + 1);
        portfolioRepository.save(portfolio);
    }

    //포트폴리오 전체 조회
    //web, app, 3da, graphicDesign, photo
    public Page<Portfolio> findPortfolios(int page, int size, String category) {
        //파라미터를 받은 후 맞는 id를 데려옴
        Long categoryId = matchCategoryId(category);
        return portfolioRepository.findByStatusAndCategoryId(PageRequest.of(page, size, Sort.by("portfolioId").descending()), categoryId, Portfolio.Status.ACTIVE);
    }

    //picture에서 portfolioId 에 맞는 첫번째 이미지링크를 가져옴
    public String firstImageUrl(Long portfolioId){
        List<Picture> pictures = pictureRepository.findAllByPortfolioId(portfolioId);
        if (pictures.size() != 0) {
            String firstImage = pictures.get(0).getPictureUrl();
            return firstImage;
        }
        //else default image 추가해주어야 함
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
    public void deletePortfolio(Long portfolioId) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        portfolio.setStatus(Portfolio.Status.DELETED);
        portfolioRepository.save(portfolio);
    }

    //회원이 존재하는지 확인
    private void verifyPortfolio(Portfolio portfolio) {
        memberService.findMember(portfolio.getMember().getId());
    }

    //isMarked
    public boolean isMarked(Long portfolioId) {
        //토큰 통해서 멤버 가져와야함
        Long memberId = 1L;
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
        Member member = memberService.findMember(memberId);

        return bookmarkRepository.findByMemberAndPortfolio(member, portfolio).isPresent() ? true : false;
    }

    //isLiked
    public boolean isLiked(Long portfolioId) {
        //토큰 통해서 멤버 가져와야함
        Long memberId = 1L;
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
        Member member = memberService.findMember(memberId);
        return likesRepository.findByMemberIdAndPortfolioId(memberId, portfolioId).isPresent() ? true : false;
    }


    //작성자인지 확인
    public boolean isWriter(Long portfolioId) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
//        Member member = memberService
        //토큰 통해서 멤버 가져와야함
        Long memberId = 1L;
//        Long memberId = null;
        return memberId.equals(portfolio.getMember().getId()) ? true : false;
    }

    //likes count
    public int countLikes(Long portfolioId){
        // likes repository에서 해당하는 포폴을 찾아서 갯수를 센다
        List<Likes> likesList = likesRepository.findByPortfolioId(portfolioId);
        int countLikes = likesList.size();
        return countLikes;
    }


}
