package com.portfolly.server.member.controller;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.mapper.MemberMapper;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import com.portfolly.server.utils.UriCreator;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import javassist.bytecode.annotation.MemberValue;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.net.http.HttpHeaders;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private final JwtTokenizer jwtTokenizer;

    @PostMapping
    @Operation(summary = "회원 등록", description = "회원을 등록합니다.")
    @CrossOrigin("*")
    public ResponseEntity postMember(@RequestHeader("Authorization") String accessToken,
                                     @Valid @RequestBody MemberDto.Post postDto){

        Member verifyMember = verifyAccessTokenAndMember(accessToken);

        Member member = memberService.roleCreateMember(mapper.PostToMember(postDto));
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URI,member.getId());

        if(verifyMember.equals(member)) {
            return ResponseEntity.created(location).body("[회원가입] : 최종 회원 가입 완료");
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }

    @PatchMapping("/{member-id}")
    @Operation(summary = "회원 수정", description = "회원을 수정합니다.")
    @CrossOrigin("*")
    public ResponseEntity patchMember(@RequestHeader("Authorization") String accessToken,
                                      @Positive @PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberDto.Patch patchDto){
        patchDto.setId(memberId);

        Member verifyMember = verifyAccessTokenAndMember(accessToken);

        Member member = memberService.updateMember(mapper.PatchToMember(patchDto));

        if(verifyMember.equals(member)) {
            return DeleteStatusMemberToNotAccess(member);
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }

    @GetMapping("/{member-id}")
    @CrossOrigin("*")
    @Operation(summary = "회원 조회(마이페이지)", description = "회원을 조회합니다.(처음 회원 등록시 클라이언트/파트너에 따라 응답값이 다릅니다.)")
    public ResponseEntity getMember(@RequestHeader("Authorization") String accessToken,
                                    @Positive @PathVariable("member-id") long memberId){

        Member verifyMember = verifyAccessTokenAndMember(accessToken);

        Member member = memberService.findMember(memberId);

        if(verifyMember.equals(member)) {
            return DeleteStatusMemberToNotAccess(member);
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
    }


    @DeleteMapping("/{member-id}")
    @CrossOrigin("*")
    @Operation(summary = "회원 삭제", description = "회원을 삭제합니다.(회원 삭제 시 바로 삭제되는것이 아니라 상태값이 바뀌며 일정 기간뒤에 삭제됩니다.)")
    public ResponseEntity deleteMember(@RequestHeader("Authorization") String accessToken,
                                       @Positive @PathVariable("member-id") long memberId){

        Member verifyMember = verifyAccessTokenAndMember(accessToken);
        Member member = memberService.findMember(memberId);

        memberService.deleteMember(memberId);

        if(verifyMember.equals(member)) {
            return ResponseEntity.noContent().build();
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER);
        }
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

    public Member verifyAccessTokenAndMember(String token){

        String accessToken = token.substring(7);

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String email = jwtTokenizer.extractEmailFromToken(accessToken,base64EncodedSecretKey);
        Member member = memberService.findByMember(email);

        return member;
    }

}
