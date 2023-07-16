package com.portfolly.server.exception.response;

import com.portfolly.server.exception.businessLogicException.ExceptionCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class HttpErrorResponse {
    private int errorCode; // 에러 코드
    private String errorCodeInfo; // 에러코드 정보 (ex. Not_FOUND
    private String errorMessage; // 에러 메시지

    private HttpErrorResponse(int errorCode, String errorCodeInfo){
        this.errorCode = errorCode;
        this.errorCodeInfo = errorCodeInfo;
    }
    private HttpErrorResponse(int errorCode, String errorCodeInfo , String errorMessage){
        this.errorCode = errorCode;
        this.errorCodeInfo = errorCodeInfo;
        this.errorMessage = errorMessage;
    }
    public static HttpErrorResponse of(HttpStatus httpStatus,String message){
        return new HttpErrorResponse(httpStatus.value(),httpStatus.getReasonPhrase(),message);
    }
    public static HttpErrorResponse of(HttpStatus httpStatus){
        return new HttpErrorResponse(httpStatus.value(),httpStatus.getReasonPhrase());
    }

}
