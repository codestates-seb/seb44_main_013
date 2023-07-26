package com.portfolly.server.exception.response;

import com.portfolly.server.exception.error.ErrorResponseInfo;
import lombok.Getter;
import org.springframework.validation.BindingResult;

import java.util.List;

@Getter
public class ValidationErrorResponse {
    private List<ErrorResponseInfo.FieldError> fieldErrors;

    private ValidationErrorResponse(List<ErrorResponseInfo.FieldError> fieldErrors){
        this.fieldErrors = fieldErrors;
    }
    public static ValidationErrorResponse of(BindingResult bindingResult){
        return new ValidationErrorResponse(ErrorResponseInfo.FieldError.of(bindingResult));
    }
}
