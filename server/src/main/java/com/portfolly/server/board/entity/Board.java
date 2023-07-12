package com.portfolly.server.board.entity;

import com.portfolly.server.audit.Auditable;
import com.portfolly.server.board_comment.entity.Comment;
import com.portfolly.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.implementation.bytecode.Division;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Board extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    private Long view = 0L;

    // todo : 게시판 구분 : rec / cop
    private String Division;

    // 게시글 상태
    @Enumerated(value = EnumType.STRING)
    private Status status = Status.POST_ACTIVE;


    // todo : 비활성화시 수정안되도록 하기 / 삭제만들기
    public enum Status {
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
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER)
    private List<Comment> Comments = new ArrayList<>();


    //----------------

    public Board(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
