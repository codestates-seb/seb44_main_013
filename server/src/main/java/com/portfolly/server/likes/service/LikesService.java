package com.portfolly.server.likes.service;

import com.portfolly.server.likes.entity.Likes;
import com.portfolly.server.likes.repository.LikesRepository;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikesService {
    private final LikesRepository likesRepository;
    private final MemberService memberService;

    //좋아요 등록
    public void selectLikes(Long memberId, Long portfolioId) {
        Member member = memberService.findMember(memberId);
        //if Likes 있으면 등록하고 없으면 취소
        Optional<Likes> optionalLikes = likesRepository.findByMemberIdAndPortfolioId(memberId, portfolioId);
        if (optionalLikes.isPresent()) {
            likesRepository.delete(optionalLikes.orElseThrow(()->new RuntimeException()));
        }
        else {
            Likes likes = new Likes();
            selectLikes(memberId, portfolioId);
            likesRepository.save(likes);
        }
    }

}
