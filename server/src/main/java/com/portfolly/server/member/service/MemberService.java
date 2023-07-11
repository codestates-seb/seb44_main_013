package com.portfolly.server.member.service;

import com.portfolly.server.audit.Auditable;
import com.portfolly.server.exception.BusinessLogicException;
import com.portfolly.server.exception.ExceptionCode;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.helper.DeleteScheduleDateHelper;
import com.portfolly.server.member.helper.ServiceConfigureHelper;
import com.portfolly.server.member.repository.MemberRepository;
import com.portfolly.server.utils.DataBaseConfig;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.hibernate.metamodel.model.domain.internal.MapMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.util.Optional;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService implements ServiceConfigureHelper {
    private final MemberRepository memberRepository;
    private final DataBaseConfig dataBaseConfig;

    public Member createMember(Member member){

        duplicationVerifiedEmail(member.getEmail()); // 이메일 중복 여부 검사
        member.setName(verifyExistName(member.getName())); // 이름 중복 검사 : 중복 시 뒤에 랜덤한 숫자를 붙임

        return memberRepository.save(postMember(member));
    }
    public Member updateMember(Member member){

        // 멤버 찾기
        Member resultMember = findByMember(member.getId());
        // 데이터베이스 안 이메일 존재 여부 확인
        verifiedExistEmail(resultMember.getEmail());
        member.setName(verifyExistName(member.getName())); // 이름 중복 검사

        return memberRepository.save(patchMember(member,resultMember));
    }
    public Member findMember(long memberId){

        Member resultMember = findByMember(memberId);

        return memberRepository.save(resultMember);
    }
    public void deleteMember(long memberId){

        Member member = findByMember(memberId);
        verifiedExistEmail(member.getEmail());
        member.setMemberStatus(Member.Member_Status.MEMBER_DELETE);

        String username;
        String password;
        username = dataBaseConfig.setUsername();
        password = dataBaseConfig.setPassword();

        DeleteScheduleDateHelper deleteScheduleDateHelper = new DeleteScheduleDateHelper();
        deleteScheduleDateHelper.setDataBase(username,password);

        deleteScheduleDateHelper.scheduleDateDirection("MEMBER",memberId);
    }

    // 이메일 존재 여부
    private void verifiedExistEmail(String email){
        Optional<Member> findEmail = memberRepository.findByEmail(email);
        if (findEmail.isEmpty()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST);
        }
    }
    // 회원 찾기
    private Member findByMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_EXIST));
    }
    // 이메일 중복 오류
    private void duplicationVerifiedEmail(String email){
        Optional<Member> findEmail = memberRepository.findByEmail(email);

        if(findEmail.isPresent()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_DUPLICATION_ERROR);
        }
    }

    private String verifyExistName(String name){     // oauth2로 로그인 했을 때 같은 이름이 있을 때 1~1000까지의 랜덤숫자를 붙임
        String resultName = name;
        Optional<Member> optionalMember = memberRepository.findByName(name);
        if(optionalMember.isPresent()){
            Random random = new Random();
            int randomNumber = random.nextInt(10000) + 1;
            resultName = name + randomNumber;
        }

        return resultName;
    }
}
