package com.portfolly.server.member.mapper;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.bookmark.entity.Bookmark;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.entity.Portfolio;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
   Member AuthToMember(MemberDto.Auth auth);
   Member PostToMember(MemberDto.Post post);
   Member PatchToMember(MemberDto.Patch patch);
//   default MemberDto.Client_Response MemberToClientResponse(Member member){
//      if ( member == null ) {
//         return null;
//      }
//
//      MemberDto.Client_Response client_Response = new MemberDto.Client_Response();
//
//      client_Response.setId( member.getId() );
//      client_Response.setName( member.getName() );
//      client_Response.setEmail( member.getEmail() );
//      client_Response.setMember_role( member.getMember_role() );
//      client_Response.setLocation( member.getLocation() );
//      client_Response.setComInfo( member.getComInfo() );
//      client_Response.setMemberStatus( member.getMemberStatus() );
//
//      List<Bookmark> bookmarkList = member.getBookmarks();
//      List<Board> boardList = member.getBoards();
//
//      if(bookmarkList != null){
//         client_Response.setBookmarks(bookmarkList);
//      }
//
//      if(boardList != null){
//         client_Response.setBoards(boardList);
//      }
//
//      return client_Response;
//   }
//   default MemberDto.Partner_Response MemberToPartnerResponse(Member member){
//      if ( member == null ) {
//         return null;
//      }
//
//      MemberDto.Partner_Response partner_Response = new MemberDto.Partner_Response();
//
//      partner_Response.setId( member.getId() );
//      partner_Response.setName( member.getName() );
//      partner_Response.setEmail( member.getEmail() );
//      partner_Response.setMember_role( member.getMember_role() );
//      partner_Response.setLocation( member.getLocation() );
//      partner_Response.setJob( member.getJob() );
//      partner_Response.setCareer( member.getCareer() );
//      partner_Response.setAward( member.getAward() );
//      partner_Response.setSkill( member.getSkill() );
//      partner_Response.setMemberStatus( member.getMemberStatus() );
//
//      List<Portfolio> portfolioList = member.getPortfolios();
//      List<Bookmark> bookmarkList = member.getBookmarks();
//      List<Board> boardList = member.getBoards();
//
//      if(portfolioList != null){
//         partner_Response.setPortfolios(portfolioList);
//      }
//
//      if(bookmarkList != null){
//         partner_Response.setBookmarks(bookmarkList);
//      }
//
//      if(boardList != null){
//         partner_Response.setBoards(boardList);
//      }
//
//      return partner_Response;
//   }

      MemberDto.Client_Response MemberToClientResponse(Member member);
      MemberDto.Partner_Response MemberToPartnerResponse(Member member);
}
