package com.portfolly.server.exception.advice;

import com.nimbusds.oauth2.sdk.ErrorResponse;
import com.portfolly.server.exception.businessLogicException.BusinessLogicException;
import com.portfolly.server.exception.response.ConstraintViolationErrorResponse;
import com.portfolly.server.exception.response.HttpErrorResponse;
import com.portfolly.server.exception.response.ValidationErrorResponse;
import jdk.jfr.Name;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;
import java.security.SignatureException;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e){

        final ValidationErrorResponse response = ValidationErrorResponse.of(e.getBindingResult());
        log.error("ValidationErrorResponse : " + e.getMessage());
        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ConstraintViolationErrorResponse handleConstraintViolationException(ConstraintViolationException e){

        final ConstraintViolationErrorResponse errorResponse = ConstraintViolationErrorResponse.of(e.getConstraintViolations());
        log.error("ConstraintViolationErrorResponse : " + e.getMessage());
        return errorResponse;
    }

    @Name("Access BusinessLogicException")
    @ExceptionHandler
    @ResponseStatus
    public HttpErrorResponse HttpErrorResponseException(BusinessLogicException e){

        final HttpErrorResponse response = HttpErrorResponse.of(e.getExceptionCode().getStatus(),e.getMessage());
        log.error("HttpErrorResponse : " + e.getMessage());
        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public HttpErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e){

        log.error("METHOD_NOT_ALLOWED : " + e.getMessage());
        return HttpErrorResponse.of(HttpStatus.METHOD_NOT_ALLOWED, e.getMessage());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public HttpErrorResponse handleException(NullPointerException e){

        log.error("INTERNAL_SERVER_ERROR : " + e.getMessage());
        return HttpErrorResponse.of(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage());
    }

//    @ExceptionHandler(SignatureException.class)
//    @ResponseStatus(HttpStatus.UNAUTHORIZED)
//    public ErrorResponse handleSignatureException(SignatureException e) {
//
//        log.error("SignatureException : "  + e.getMessage());
//        return new ErrorResponse("Unauthorized", "Invalid Signature");
//    }

}
