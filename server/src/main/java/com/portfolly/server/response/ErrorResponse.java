package com.portfolly.server.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorResponse {
    private int status;
    private String message;

    private ErrorResponse(int status,String message){
        this.status = status;
        this.message = message;
    }

    public static ErrorResponse of(HttpStatus httpStatus){
        return new ErrorResponse(httpStatus.value(),httpStatus.getReasonPhrase());
    }
}
