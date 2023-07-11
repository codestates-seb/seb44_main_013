package com.portfolly.server.member.controller;

import com.portfolly.server.exception.BusinessLogicException;
import com.portfolly.server.exception.ExceptionCode;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Slf4j
@Validated
@Transactional
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final String MEMBER_DEFAULT_URI = "/members";
    private final MemberMapper mapper;
    private final MemberService memberService;

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postDto){

        Member member = memberService.createMember(mapper.PostToMember(postDto));
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URI,member.getId());

        return ResponseEntity.created(location).body("회원가입 완료");
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@Positive @PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberDto.Patch patchDto){
        patchDto.setId(memberId);
        Member member = memberService.updateMember(mapper.PatchToMember(patchDto));

        return MemberRoleResponse(member);

    }

    // 보류 사항 : 멤버 권한에 따라 쿼리문을 작성하여 개인 포트폴리오-게시물(모든 권한) , 북마크(개인 권한) , 게시판(개인 권한) 순
    // 포트폴리오 및 북마크 기능과 게시판 기능이 얼추 완성되면 추가 구현 예정
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@Positive @PathVariable("member-id") long memberId){

        Member member = memberService.findMember(memberId);

        return MemberRoleResponse(member);
    }


    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@Positive @PathVariable("member-id") long memberId){

        memberService.deleteMember(memberId);

        return ResponseEntity.noContent().build();
    }

    public ResponseEntity MemberRoleResponse(Member member){

        if(member.getMember_role().equals(Member.Member_Role.CLIENT)) {
            return new ResponseEntity(mapper.MemberToClientResponse(member), HttpStatus.OK);
        }
        else if (member.getMember_role().equals(Member.Member_Role.PARTNER)) {
            return new ResponseEntity(mapper.MemberToPartnerResponse(member), HttpStatus.OK);
        }
        else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_ROLE_NOT_EXIST);
        }
    }
}
