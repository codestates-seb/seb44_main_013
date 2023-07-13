import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { User } from '@/mocks/data';

import {
  MypageIntroWrap,
  MypageIntroContainer,
  IntroduceTitle,
  BtnStyleContainer,
} from './MypageIntroduce.styled';

interface MypageIntroduceProps {
  user: User | null;
}

export default function MypageIntroduce({ user }: MypageIntroduceProps) {
  const initialJob = user?.job || 'What is your job?';
  const initialCareer = user?.career || 'Career 1';
  const initialAwards = user?.award || 'Awards 1';
  const navigate = useNavigate();

  const [job, setJob] = useState(initialJob);
  const [career, setCareer] = useState(initialCareer);
  const [awards, setAwards] = useState(initialAwards);

  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInput =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

  const handleUpdate = () => {
    axios
      .put('/members', { job, career, awards })
      .then(() => {
        console.log('저장 성공');
        setIsEdit(false);
      })
      .catch((error) => {
        console.error('저장 실패', error);
      });
  };

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      axios
        .delete('/members')
        .then(() => {
          console.log('삭제 성공');
          navigate('/');
        })
        .catch((error) => {
          console.error('삭제 실패', error);
        });
    }
  };

  return (
    <MypageIntroWrap>
      <MypageIntroContainer>
        <IntroduceTitle>Job</IntroduceTitle>
        {isEdit ? (
          <input type="text" value={job} onChange={handleInput(setJob)} />
        ) : (
          <p className="introContent">{job}</p>
        )}
      </MypageIntroContainer>
      <hr />
      <MypageIntroContainer>
        <IntroduceTitle>Career</IntroduceTitle>
        <ul>
          {isEdit ? (
            <input
              type="text"
              value={career}
              onChange={handleInput(setCareer)}
            />
          ) : (
            <li className="introContent">{career}</li>
          )}
        </ul>
      </MypageIntroContainer>
      <hr />
      <MypageIntroContainer>
        <IntroduceTitle>Awards</IntroduceTitle>
        <ul>
          {isEdit ? (
            <input
              type="text"
              value={awards}
              onChange={handleInput(setAwards)}
            />
          ) : (
            <li className="introContent">{awards}</li>
          )}
        </ul>
      </MypageIntroContainer>
      {isEdit ? (
        <MdDone className="editBtn" onClick={handleUpdate} size={24} />
      ) : (
        <BsFillPencilFill className="editBtn" onClick={toggleEdit} />
      )}
      <BtnStyleContainer>
        <PurpleBtn onClick={handleDelete}>회원 탈퇴</PurpleBtn>
      </BtnStyleContainer>
    </MypageIntroWrap>
  );
}
