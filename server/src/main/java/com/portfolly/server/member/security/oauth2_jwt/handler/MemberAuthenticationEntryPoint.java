//package com.portfolly.server.member.security.oauth2_jwt.handler;
//
//import com.portfolly.server.member.security.oauth2_jwt.utils.ErrorResponder;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.stereotype.Component;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//// Spring security 인증되지 않은 사용자가 보호된 리소스에 접근 -> 예외 발생
//@Slf4j
//@Component
//public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
//
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
//        Exception exception = (Exception) request.getAttribute("exception");
//        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
//
//        logExceptionMessage(authException,exception);
//    }
//
//    private void logExceptionMessage(AuthenticationException authenticationException,Exception exception) {
//        String message = exception != null ? exception.getMessage() : authenticationException.getMessage();
//        log.warn("Unauthorized error happened : {}", message);
//    }
//}
