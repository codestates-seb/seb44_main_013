package com.portfolly.server.member.helper;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.entity.Member;

import java.util.Optional;

public interface ServiceConfigureHelper {

    // 멤버 초기설정
    default Member postMember(Member member){

        if(member == null){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_EXIST); // 1차검증 : 회원 존재 여부
        }
        if(member.getEmail().isEmpty()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST); // 2차 검증 : Post 시 회원 이메일 여부
        }
        return Member.builder()
                .name(member.getName())
                .email(member.getEmail())
                .refreshToken(member.getRefreshToken())
                .member_role(member.getMember_role())
                .location("장소를 입력하세요.")
                .comInfo("[클라이언트] 회사정보를 입력하세요.")
                .job("[파트너] 직업을 입력하세요")
                .career("[파트너] 경력을 작성하세요")
                .award("[파트너] 수상경력을 작성하세요.")
                .skill("[파트너] 스킬을 작성하세요")
                .memberStatus(Member.Member_Status.MEMBER_ACTIVE)
                .build();
    }

    default Member patchMember(Member member,Member resultMember){

        Optional.ofNullable(member.getName())
                .ifPresent(resultMember::setName);
        Optional.ofNullable(member.getLocation())
                .ifPresent(resultMember::setLocation);
        Optional.ofNullable(member.getComInfo())
                .ifPresent(resultMember::setComInfo);
        Optional.ofNullable(member.getJob())
                .ifPresent(resultMember::setJob);
        Optional.ofNullable(member.getCareer())
                .ifPresent(resultMember::setCareer);
        Optional.ofNullable(member.getAward())
                .ifPresent(resultMember::setAward);
        Optional.ofNullable(member.getSkill())
                .ifPresent(resultMember::setSkill);
        Optional.ofNullable(member.getMemberStatus())
                .ifPresent(resultMember::setMemberStatus);

        return resultMember;
    }
}
