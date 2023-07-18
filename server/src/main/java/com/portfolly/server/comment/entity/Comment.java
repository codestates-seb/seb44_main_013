package com.portfolly.server.comment.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.portfolly.server.audit.Auditable;
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
public class Comment extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

//    todo : private String image_url;

    @Enumerated(value = EnumType.STRING)
    private Status status = Status.COMMENT_ACTIVE;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "board_Id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "member_Id")
    private Member member;


    public enum Status{
        COMMENT_ACTIVE(1, "활성화"),
        COMMENT_INACTIVE(0, "비활성화");

        private int status_number;
        private String status;
        Status(int status_number, String status) {
            this.status_number = status_number;
            this.status = status;
        }
    }

    //-----------------


    public Comment(Board board, String content) {
        this.board = board;
        this.content = content;
    }
}
