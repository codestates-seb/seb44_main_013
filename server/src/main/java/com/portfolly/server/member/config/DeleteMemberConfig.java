package com.portfolly.server.member.config;

import lombok.Getter;
import org.springframework.stereotype.Component;


@Getter
@Component
public class DeleteMemberConfig {
     static int year = 3;
     public static int getYear(){
         return year;
     }

}
