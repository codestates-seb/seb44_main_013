package com.portfolly.server.member.helper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

@Slf4j
@Component
public class DeleteScheduleDateHelper {
    private String url = "jdbc:mysql://localhost:3306/portfolly";
    private String username;
    private String password;

    public void setDataBase(String username,String password){
        this.username = username;
        this.password = password;
    }

    public void scheduleDateDirection(String tableName,long memberId){
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                deleteExpiredDate(tableName,memberId);
            }
        },30000);
        log.info("Delete Complete");
    }

    // 삭제 로직 30초 뒤에 삭제 되도록 설정 : 6개월로 설정 가능
    // 추후 구현 로직 : 만일 완전히 삭제 되기전에 회원 복구시 데이터 삭제 취소
    private void deleteExpiredDate(String tableName,long memberId){

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            // 현재 날짜와 시간 가져오기
            LocalDateTime currentDateTime = LocalDateTime.now();
            LocalDateTime expiryDateTime = currentDateTime.minusSeconds(30); // 삭제할 만료 날짜와 시간 계산

            // 만료된 데이터 삭제
            String deleteQuery = "DELETE FROM " + tableName + " WHERE created_at <= ? AND id = ?";
            PreparedStatement statement = connection.prepareStatement(deleteQuery);
            statement.setTimestamp(1, java.sql.Timestamp.valueOf(expiryDateTime));
            statement.setLong(2,memberId);
            int rowsAffected = statement.executeUpdate();
            System.out.println(rowsAffected + " rows deleted.");

        } catch (SQLException e) {
            log.error("Error occurred while deleting expired data: " + e.getMessage());
        }
    }
}
