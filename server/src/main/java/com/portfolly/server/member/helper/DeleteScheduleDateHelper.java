package com.portfolly.server.member.helper;

import com.portfolly.server.member.config.DeleteMemberConfig;
import com.portfolly.server.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

@Slf4j
@Component
@RequiredArgsConstructor
public class DeleteScheduleDateHelper {
    private String url = "jdbc:mysql://localhost:3306/portfolly";
    private String username;
    private String password;
    private DeleteMemberConfig config;
    private Member.Member_Status memberStatus;

    public void setDataBase(String username,String password){
        this.username = username;
        this.password = password;
    }

    public void setMemberStatus(Member.Member_Status memberStatus){
        this.memberStatus = memberStatus;
    }

    public void scheduleDateDirection(String tableName,long memberId){
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                deleteExpiredDate(tableName,memberId);
            }
        },getDelayInMillis(DeleteMemberConfig.getYear()));
        log.info("Delete Complete");
    }

    private void deleteExpiredDate(String tableName,long memberId){

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            // 현재 날짜와 시간 가져오기
            LocalDateTime currentDateTime = LocalDateTime.now();
            LocalDateTime expiryDateTime = currentDateTime.minusMonths(DeleteMemberConfig.getYear()); // 삭제할 만료 날짜와 시간 계산

            // 만료된 데이터 삭제
            String deleteQuery = "DELETE FROM " + tableName + " WHERE created_at <= ? AND id = ?";
            PreparedStatement statement = connection.prepareStatement(deleteQuery);
            statement.setTimestamp(1, java.sql.Timestamp.valueOf(expiryDateTime));
            statement.setLong(2,memberId);
            int rowsAffected = statement.executeUpdate();
            log.info(rowsAffected + " [rows deleted.] : " + memberId + " 삭제됨");

        } catch (SQLException e) {
            log.error("Error occurred while deleting expired data: " + e.getMessage());
        }
    }

    public long getDelayInMillis(int year) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        LocalDateTime expiryDateTime = currentDateTime.plusYears(year);
        Duration duration = Duration.between(currentDateTime, expiryDateTime);
        log.info(String.valueOf(duration.toMillis()));

        return duration.toMillis();
    }
}
