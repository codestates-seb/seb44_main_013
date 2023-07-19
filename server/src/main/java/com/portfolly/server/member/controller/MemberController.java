package com.portfolly.server.member.controller;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.utils.UriCreator;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "01.Member")
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final String MEMBER_DEFAULT_URI = "/members";
    private final MemberMapper mapper;
    private final MemberService memberService;

    @PostMapping
    @Operation(summary = "회원 등록", description = "회원을 등록합니다.")
    @CrossOrigin("*")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postDto){

        Member member = memberService.createMember(mapper.PostToMember(postDto));
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URI,member.getId());

        return ResponseEntity.created(location).body("회원가입 완료");
    }

    @PatchMapping("/{member-id}")
    @Operation(summary = "회원 수정", description = "회원을 수정합니다.")
    @CrossOrigin("*")
    public ResponseEntity patchMember(@Positive @PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberDto.Patch patchDto){
        patchDto.setId(memberId);
        Member member = memberService.updateMember(mapper.PatchToMember(patchDto));

        return DeleteStatusMemberToNotAccess(member);
    }

    // 보류 사항 : 멤버 권한에 따라 쿼리문을 작성하여 개인 포트폴리오-게시물(모든 권한) , 북마크(개인 권한) , 게시판(개인 권한) 순
    // 포트폴리오 및 북마크 기능과 게시판 기능이 얼추 완성되면 추가 구현 예정
    @GetMapping("/{member-id}")
    @CrossOrigin("*")
    @Operation(summary = "회원 조회(마이페이지)", description = "회원을 조회합니다.(처음 회원 등록시 클라이언트/파트너에 따라 응답값이 다릅니다.)")
    public ResponseEntity getMember(@Positive @PathVariable("member-id") long memberId){

        Member member = memberService.findMember(memberId);

        return DeleteStatusMemberToNotAccess(member);
    }


    @DeleteMapping("/{member-id}")
    @CrossOrigin("*")
    @Operation(summary = "회원 삭제", description = "회원을 삭제합니다.(회원 삭제 시 바로 삭제되는것이 아니라 상태값이 바뀌며 일정 기간뒤에 삭제됩니다.)")
    public ResponseEntity deleteMember(@Positive @PathVariable("member-id") long memberId){

        memberService.deleteMember(memberId);

        return ResponseEntity.noContent().build();
    }

    public ResponseEntity DeleteStatusMemberToNotAccess(Member member){

        if(member.getMemberStatus().equals(Member.Member_Status.MEMBER_DELETE)){
            return ResponseEntity.noContent().build();
        }
        else {
            return MemberRoleResponse(member);
        }
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
