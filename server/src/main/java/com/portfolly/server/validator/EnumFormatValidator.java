package com.portfolly.server.validator;

import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import com.portfolly.server.member.dto.MemberDto;
import com.portfolly.server.member.entity.Member;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.Valid;

public class EnumFormatValidator implements ConstraintValidator<EnumFormat, Member.Member_Role> {
    @Override
    public void initialize(EnumFormat constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }
    @Override
    public boolean isValid(Member.Member_Role value, ConstraintValidatorContext context) {

        if(value != null){
            return value == Member.Member_Role.CLIENT || value == Member.Member_Role.PARTNER ;
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_DEFINED_MEMBER_ROLE);
        }
    }
}
