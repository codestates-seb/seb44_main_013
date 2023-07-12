package com.portfolly.server.dto;

// <T> : 제네릭타입 매개변수
// - 타입일반화가능(모든타입 들어올 수 O)
// - 다양한 타입의 데이터를 MultiResponseDto로 감싸고 전달 가능
// - <E>, <K>, <V> 로도 표기가능

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber()+1,
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages());
    }
}
