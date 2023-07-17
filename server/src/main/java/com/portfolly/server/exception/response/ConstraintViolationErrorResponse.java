package com.portfolly.server.exception.response;

import com.portfolly.server.exception.error.ErrorResponseInfo;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;

public class ConstraintViolationErrorResponse {
    private List<ErrorResponseInfo.ConstraintViolationError> violationErrors;

    private ConstraintViolationErrorResponse(List<ErrorResponseInfo.ConstraintViolationError> violationErrors){
        this.violationErrors = violationErrors;
    }

    public static ConstraintViolationErrorResponse of(Set<ConstraintViolation<?>> violations) {
        return new ConstraintViolationErrorResponse(ErrorResponseInfo.ConstraintViolationError.of(violations));
    }
}
