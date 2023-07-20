package com.portfolly.server.exception.businessLogicException;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ExceptionCode {

    MEMBER_EXIST(HttpStatus.CONFLICT,"회원이 존재합니다."),
    MEMBER_NOT_EXIST(HttpStatus.NOT_FOUND,"회원이 존재하지 않습니다."),
    MEMBER_ROLE_NOT_EXIST(HttpStatus.NOT_FOUND,"회원의 역할이 정해지지 않았습니다."),
    EMAIL_NOT_EXIST(HttpStatus.NOT_FOUND,"회원의 이메일이 존재하지 않습니다."),
    EMAIL_DUPLICATION_ERROR(HttpStatus.CONFLICT,"이메일 중복 오류 입니다. [Action] : 다른 이메일을 사용하여 주십시오."),
    NOT_DEFINED_MEMBER(HttpStatus.BAD_REQUEST,"정의 되지 않은 회원입니다. [Action] 올바른 이메일을 입력하여 주십시오."),
    NOT_DEFINED_MEMBER_ROLE(HttpStatus.BAD_REQUEST,"정의 되지 않은 회원입니다. [Action] : 클라이언트/파트너를 정의해 주십시오."),
    POST_NOT_EXIST(HttpStatus.NOT_FOUND, "게시글이 존재하지 않습니다."),
    COMMENT_NOT_EXIST(HttpStatus.NOT_FOUND, "댓글이 존재하지 않습니다.");

    @Getter
    private HttpStatus status;
    @Getter
    private String message;
    ExceptionCode(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }
}
