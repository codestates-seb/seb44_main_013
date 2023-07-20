package com.portfolly.server.member.mapper;

import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-20T11:32:46+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.19 (Amazon.com Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member AuthToMember(MemberDto.Auth auth) {
        if ( auth == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.name( auth.getName() );
        member.email( auth.getEmail() );

        return member.build();
    }

    @Override
    public Member PostToMember(MemberDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.id( post.getId() );
        member.member_role( post.getMember_role() );

        return member.build();
    }

    @Override
    public Member PatchToMember(MemberDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.id( patch.getId() );
        member.name( patch.getName() );
        member.location( patch.getLocation() );
        member.comInfo( patch.getComInfo() );
        member.job( patch.getJob() );
        member.career( patch.getCareer() );
        member.award( patch.getAward() );
        member.skill( patch.getSkill() );
        member.memberStatus( patch.getMemberStatus() );

        return member.build();
    }
}
