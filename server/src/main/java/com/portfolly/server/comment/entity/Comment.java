package com.portfolly.server.comment.entity;

import com.portfolly.server.board.entity.Board;
import com.portfolly.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;

    @Enumerated(value = EnumType.STRING)
    private Status status;

    public enum Status{
        POST_ACTIVE(1, "활성화"),
        POST_INACTIVE(0, "비활성화");

        private int status_number;
        private String status;
        Status(int status_number, String status) {
            this.status_number = status_number;
            this.status = status;
        }
    }

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

}
