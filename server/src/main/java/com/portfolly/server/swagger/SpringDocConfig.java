package com.portfolly.server.swagger;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(
                title = "PortFolly Application API Document",
                description = "API Document",
                version = "v0.1",
                termsOfService = "http://www.tg360tech.com/terms",
                license = @License(
                        name = "Apache License Version 2.0",
                        url = "http://www.apache.org/licenses/LICENSE-2.0"
                ),
                contact = @Contact(
                        name = "leeheejae",
                        email = "789dlglwo@gmail.com"
                )
        ),
        tags = {
                @Tag(name = "01.Member", description = "회원 기능"),
                @Tag(name = "02.Security", description = "로그인/로그아웃 기능"),
                @Tag(name = "03.Undefined", description = "미정의 기능"),
        }
)
@Configuration
public class SpringDocConfig {
}
