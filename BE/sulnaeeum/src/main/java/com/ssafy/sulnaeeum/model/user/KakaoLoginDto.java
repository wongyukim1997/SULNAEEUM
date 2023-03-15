package com.ssafy.sulnaeeum.model.user;

import lombok.*;

import javax.persistence.Column;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KakaoLoginDto {

    TokenDto tokenDto;

    private String kakaoId;

    private String nickname;

    @Column(name="img",nullable = false)
    private String img;
}
