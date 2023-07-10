package com.portfolly.server.member.encryption;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// application 프로퍼티 암호화 값 테스트
@SpringBootTest
public class Encryption {

    @Test
    public void createEncryption(){

        String url = "";
        String username = "";
        String password = "";
        String clientId = "";
        String clientPassword = "";

        System.out.println(jasyptEncoding(url));
        System.out.println(jasyptEncoding(username));
        System.out.println(jasyptEncoding(password));
        System.out.println(jasyptEncoding(clientId));
        System.out.println(jasyptEncoding(clientPassword));
    }

    public String jasyptEncoding(String value) {

        String key = "";
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWithMD5AndDES");
        pbeEnc.setPassword(key);
        return pbeEnc.encrypt(value);
    }

}
