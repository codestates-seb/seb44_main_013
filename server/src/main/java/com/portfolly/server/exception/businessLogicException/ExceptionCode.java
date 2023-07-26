package com.portfolly.server.exception.businessLogicException;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ExceptionCode {

    MEMBER_EXIST(HttpStatus.CONFLICT,"회원이 존재합니다."),
    MEMBER_NOT_EXIST(HttpStatus.NOT_FOUND,"회원이 존재하지 않습니다."),
    MEMBER_ROLE_NOT_EXIST(HttpStatus.NOT_FOUND,"회원의 역할이 정해지지 않았습니다."),
    EMAIL_NOT_EXIST(HttpStatus.NOT_FOUND,"회원의 이메일이 존재하지 않습니다."),
    NOT_DEFINED_REFRESH_TOKEN(HttpStatus.CONFLICT, "올바르지 않는 RefreshToken"),
    EMAIL_DUPLICATION_ERROR(HttpStatus.CONFLICT,"이메일 중복 오류 입니다. [Action] : 다른 이메일을 사용하여 주십시오."),
    NOT_DEFINED_MEMBER(HttpStatus.BAD_REQUEST,"정의 되지 않은 회원입니다."),
    NOT_DEFINED_MEMBER_ROLE(HttpStatus.BAD_REQUEST,"정의 되지 않은 회원입니다. [Action] : 클라이언트/파트너를 정의해 주십시오."),
    NOT_DEFINED_BEARER_TOKEN(HttpStatus.BAD_REQUEST,"올바르지 않은 Access Token 유형입니다. [Action] Bearer <- 포함해주세요."),
    POST_NOT_EXIST(HttpStatus.NOT_FOUND, "게시글이 존재하지 않습니다."),
    POST_DELETED(HttpStatus.NOT_FOUND, "게시글이 삭제되었습니다."),
    COMMENT_NOT_EXIST(HttpStatus.NOT_FOUND, "댓글이 존재하지 않습니다."),
    COMMENT_DELETED(HttpStatus.NOT_FOUND, "댓글이 삭제되었습니다."),
    PORTFOLIO_NOT_FOUND(HttpStatus.NOT_FOUND, "포트폴리오를 찾을 수 없습니다"),
    PICTURE_NOT_FOUND(HttpStatus.NOT_FOUND, "이미지를 찾을 수 없습니다"),
    MEMBER_NOT_MATCH(HttpStatus.FORBIDDEN,"작성자와 일치하지 않습니다."),
    CATEGORY_NOT_FOUND(HttpStatus.NOT_FOUND,"카테고리가 존재하지 않습니다."),
    TAG_NOT_FOUND(HttpStatus.NOT_FOUND, "태그가 존재하지 않습니다.");

    @Getter
    private HttpStatus status;
    @Getter
    private String message;
    ExceptionCode(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }
}