package com.portfolly.server.security.config;
import com.portfolly.server.member.service.MemberService;
import com.portfolly.server.security.authorization.filter.JwtVerificationFilter;
import com.portfolly.server.security.authentication.oauth2.handler.MemberAccessDeniedHandler;
import com.portfolly.server.security.authentication.oauth2.handler.MemberAuthenticationEntryPoint;
import com.portfolly.server.security.authentication.oauth2.handler.OAuth2MemberSuccessHandler;
import com.portfolly.server.security.authorization.jwt.JwtTokenizer;
import com.portfolly.server.security.authorization.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * JWT 검증 기능 추가
 */
@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils,
                                 MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers().frameOptions().sameOrigin()
            .and()
            .csrf().disable()
            .cors(withDefaults())
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
            .accessDeniedHandler(new MemberAccessDeniedHandler())
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
                .authorizeHttpRequests(authorize -> authorize

                        // 포트폴리오 관련
                        .antMatchers(HttpMethod.POST,"/portfolios").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH , "/portfolios/*").hasAnyRole("USER","ADMIN")
                        .antMatchers(HttpMethod.GET ,"/portfolios/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/portfolios").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/portfolios/*").hasAnyRole("USER","ADMIN")

                        // Board 관련
                        .antMatchers(HttpMethod.POST,"/boards/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH , "/boards/**").hasAnyRole("USER","ADMIN")
                        .antMatchers(HttpMethod.GET ,"/boards/*").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/boards/*").hasAnyRole("USER","ADMIN")

                        // comment 관련
                        .antMatchers(HttpMethod.POST,"/comments/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH , "/comments/**").hasAnyRole("USER","ADMIN")
                        .antMatchers(HttpMethod.GET ,"/comments/*").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/comments/*").hasAnyRole("USER","ADMIN")



            )
            .oauth2Login(oauth2 -> oauth2
                    .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService))
            );

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    // 추가
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
