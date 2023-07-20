INSERT INTO category(name)
VALUES ('web'),
       ('app'),
       ('3da'),
       ('graphicdesign'),
       ('photo');

INSERT INTO member(name, email, member_role)
VALUES ('임시용', 'dj1WJ1rn1@gmail.com', 'CLIENT');

INSERT INTO portfolio(created_at, content, explains, status, title, view, category_id, member_id)
VALUES ('2023-07-20 17:01:39.017297','content<br><img src="https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/29619c04-a739-4e3e-b1c4-9f8453aa4f40.png"><br>wkfskdhskdy',
        'explains explains','ACTIVE', 'title is title', 0, 1, 1);