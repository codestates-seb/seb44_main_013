package com.portfolly.server.member.mapper;

import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
   Member PostToMember(MemberDto.Post post);
   Member PatchToMember(MemberDto.Patch patch);
   MemberDto.Client_Response MemberToClientResponse(Member member);
   MemberDto.Partner_Response MemberToPartnerResponse(Member member);
}
