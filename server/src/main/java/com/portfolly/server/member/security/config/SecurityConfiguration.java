//package com.portfolly.server.member.security.config;
//
//import com.portfolly.server.member.security.oauth2_jwt.filter.JwtVerificationFilter;
//import com.portfolly.server.member.security.oauth2_jwt.handler.MemberAccessDeniedHandler;
//import com.portfolly.server.member.security.oauth2_jwt.handler.MemberAuthenticationEntryPoint;
//import com.portfolly.server.member.security.oauth2_jwt.handler.Oauth2MemberSuccessHandler;
//import com.portfolly.server.member.security.oauth2_jwt.jwt.JwtTokenizer;
//import com.portfolly.server.member.security.oauth2_jwt.utils.CustomAuthorityUtils;
//import com.portfolly.server.member.service.MemberService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
//import org.springframework.security.oauth2.client.registration.ClientRegistration;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
//import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//@Configuration
//@RequiredArgsConstructor
//public class SecurityConfiguration {
//
//    private final JwtTokenizer jwtTokenizer;
//    private final CustomAuthorityUtils authorityUtils;
//    private final MemberService memberService;
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//                .headers().frameOptions().sameOrigin()
//                .and()
//                .csrf().disable()
//                .cors(Customizer.withDefaults())
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .formLogin().disable()
//                .httpBasic().disable()
//                .exceptionHandling()
////                .authenticationEntryPoint(new MemberAuthenticationEntryPoint()) // 인증 진입점
////                .accessDeniedHandler(new MemberAccessDeniedHandler()) // 인증 실패시
//                .and()
//                .apply(new CustomFilterConfigure())
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
//                        .anyRequest().authenticated()) // 인증된 request 대해서만 접근 허용 추가
//                .oauth2Login(ouath2 -> ouath2.successHandler(
//                        new Oauth2MemberSuccessHandler(jwtTokenizer,authorityUtils,memberService)
//                )); // Oauth 2 로그인 인증 활성화
//
//        return http.build();
//    }
//
//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*")); // 호출하여 허용되는 오리진 -> 모든 오리진 허용
//        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//
//        return source;
//    }
//
//    public class CustomFilterConfigure extends AbstractHttpConfigurer<CustomFilterConfigure, HttpSecurity> {
//
//        @Override
//        public void configure(HttpSecurity builder){
//            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer,authorityUtils);
//
//            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
//        }
//    }
//}
