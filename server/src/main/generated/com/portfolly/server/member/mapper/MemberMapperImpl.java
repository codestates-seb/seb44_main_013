package com.portfolly.server.member.mapper;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-21T23:09:39+0900",
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
        member.imageUrl( auth.getImageUrl() );

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

    @Override
    public MemberDto.Client_Response MemberToClientResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.Client_Response client_Response = new MemberDto.Client_Response();

        client_Response.setId( member.getId() );
        client_Response.setName( member.getName() );
        client_Response.setEmail( member.getEmail() );
        client_Response.setMember_role( member.getMember_role() );
        client_Response.setLocation( member.getLocation() );
        client_Response.setComInfo( member.getComInfo() );
        client_Response.setMemberStatus( member.getMemberStatus() );
        List<Bookmark> list = member.getBookmarks();
        if ( list != null ) {
            client_Response.setBookmarks( new ArrayList<Bookmark>( list ) );
        }
        List<Board> list1 = member.getBoards();
        if ( list1 != null ) {
            client_Response.setBoards( new ArrayList<Board>( list1 ) );
        }

        return client_Response;
    }

    @Override
    public MemberDto.Partner_Response MemberToPartnerResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.Partner_Response partner_Response = new MemberDto.Partner_Response();

        partner_Response.setId( member.getId() );
        partner_Response.setName( member.getName() );
        partner_Response.setEmail( member.getEmail() );
        partner_Response.setMember_role( member.getMember_role() );
        partner_Response.setLocation( member.getLocation() );
        partner_Response.setJob( member.getJob() );
        partner_Response.setCareer( member.getCareer() );
        partner_Response.setAward( member.getAward() );
        partner_Response.setSkill( member.getSkill() );
        partner_Response.setMemberStatus( member.getMemberStatus() );
        List<Portfolio> list = member.getPortfolios();
        if ( list != null ) {
            partner_Response.setPortfolios( new ArrayList<Portfolio>( list ) );
        }
        List<Bookmark> list1 = member.getBookmarks();
        if ( list1 != null ) {
            partner_Response.setBookmarks( new ArrayList<Bookmark>( list1 ) );
        }
        List<Board> list2 = member.getBoards();
        if ( list2 != null ) {
            partner_Response.setBoards( new ArrayList<Board>( list2 ) );
        }

        return partner_Response;
    }
}
