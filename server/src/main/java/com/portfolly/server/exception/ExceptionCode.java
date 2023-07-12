package com.portfolly.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_EXIST(409,"회원이 존재합니다."),
    MEMBER_NOT_EXIST(404,"회원이 존재하지 않습니다."),
    MEMBER_ROLE_NOT_EXIST(404,"회원의 역할이 정해지지 않았습니다."),
    EMAIL_NOT_EXIST(404,"회원의 이메일이 존재하지 않습니다."),
    EMAIL_DUPLICATION_ERROR(409,"이메일 중복 오류 입니다."),
    PORTFOLIO_NOT_FOUND(404,"포트폴리오를 찾을 수 없습니다.");

    @Getter
    private int status;
    @Getter
    private String message;
    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
