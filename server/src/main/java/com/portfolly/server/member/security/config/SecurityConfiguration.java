package com.portfolly.server.member.security.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.validation.annotation.Validated;

@Configuration
public class SecurityConfiguration {

    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().authenticated()) // 인증된 request 대해서만 접근 허용 추가
                .oauth2Login(Customizer.withDefaults()); // Oauth 2 로그인 인증 활성화

        return http.build();
    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository(){
        var clientRegistration = clientRegistration();

        return new InMemoryClientRegistrationRepository(clientRegistration);
    }

    @Bean
    public ClientRegistration clientRegistration(){

        return CommonOAuth2Provider
                .GOOGLE
                .getBuilder("google")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();

    }
}
