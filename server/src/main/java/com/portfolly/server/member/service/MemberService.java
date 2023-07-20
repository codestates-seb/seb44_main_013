package com.portfolly.server.member.service;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.config.DeleteMemberConfig;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.member.helper.DeleteScheduleDateHelper;
import com.portfolly.server.member.helper.ServiceConfigureHelper;
import com.portfolly.server.member.repository.MemberRepository;
import com.portfolly.server.utils.DataBaseConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService implements ServiceConfigureHelper {
    private final MemberRepository memberRepository;
    private final DataBaseConfig dataBaseConfig;
    private final DeleteScheduleDateHelper deleteScheduleDateHelper;

    public Member createMember(Member member){

        duplicationVerifiedEmail(member.getEmail()); // 이메일 중복 여부 검사

        return memberRepository.save(postMember(member));
    }

    public Member roleCreateMember(Member member){

        Member resultMember = findByMember(member.getId());

        return memberRepository.save(RolePatchMember(member,resultMember));
    }

    public Member updateMember(Member member){
        // 멤버 찾기
        Member resultMember = findByMember(member.getId());
        // 데이터베이스 안 이메일 존재 여부 확인
        verifiedExistEmail(resultMember.getEmail());

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

        if(member.getMemberStatus().equals(Member.Member_Status.MEMBER_DELETE)) {

            deleteScheduleDateHelper.setDataBase(username, password);

            LocalDateTime currentTime = LocalDateTime.now();
            member.setExpired_at(currentTime.plusYears(DeleteMemberConfig.getYear()));

            deleteScheduleDateHelper.scheduleDateDirection("MEMBER", memberId);

        }
    }
    private void verifiedExistEmail(String email){
        Optional<Member> findEmail = memberRepository.findByEmail(email);
        if (findEmail.isEmpty()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_NOT_EXIST);
        }
    }
    public Member findByMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_EXIST));
    }
    private void duplicationVerifiedEmail(String email){
        Optional<Member> findEmail = memberRepository.findByEmail(email);

        if(findEmail.isPresent()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_DUPLICATION_ERROR);
        }
    }

}
