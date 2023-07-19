package com.portfolly.server.jasypt;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JasyptConfig {

    @Value("${jasypt.encryptor.password}")
    private String password;

    @Bean("jasyptStringEncryptor")
    public StringEncryptor stringEncryptor(){
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor(); // 암호화 도구
        SimpleStringPBEConfig config = new SimpleStringPBEConfig(); // 알고리즘 사용 -> 문자열 암호화 설정
        config.setPassword(password);
        config.setPoolSize("1");
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setStringOutputType("base64"); // 암호화된 문자열 base64 인코딩 형식 출력
        config.setKeyObtentionIterations("1000"); // 키 획득 반복 횟수 설정

        encryptor.setConfig(config);
        return encryptor;
    }
}
