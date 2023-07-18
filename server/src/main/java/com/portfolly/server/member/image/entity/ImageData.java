package com.portfolly.server.member.image.entity;

import com.portfolly.server.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "ImageData")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ImageData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    @Lob
    @Column(name = "imageData",length = 1000)
    private byte[] imageData;
    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
