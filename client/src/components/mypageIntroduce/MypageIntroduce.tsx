import { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  MypageIntroWrap,
  MypageIntroContainer,
  IntroduceTitle,
  BtnStyleContainer,
} from './MypageIntroduce.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { UserData } from '@/mocks/data';

interface MypageIntroduceProps {
  userData: UserData | null;
}

export default function MypageIntroduce({ userData }: MypageIntroduceProps) {
  const initialJob = userData?.job || 'What is your job?';
  const initialCareer = userData?.career || 'Career 1';
  const initialAwards = userData?.award || 'Awards 1';
  const navigate = useNavigate();

  const [job, setJob] = useState(initialJob);
  const [career, setCareer] = useState(initialCareer);
  const [awards, setAwards] = useState(initialAwards);

  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = async () => {
    try {
      await axios.put('/members', { job, career, awards });
      console.log('저장 성공');
    } catch (error) {
      console.error('저장 실패', error);
    }
    setIsEdit(false);
  };

  const handleDelete = async () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      try {
        await axios.delete('/members');
        console.log('삭제 성공');
        navigate('/');
      } catch (error) {
        console.error('삭제 실패', error);
      }
    }
  };

  return (
    <MypageIntroWrap>
      <MypageIntroContainer>
        <IntroduceTitle>Job</IntroduceTitle>
        {isEdit ? (
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
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
              onChange={(e) => setCareer(e.target.value)}
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
              onChange={(e) => setAwards(e.target.value)}
            />
          ) : (
            <li className="introContent">{awards}</li>
          )}
        </ul>
      </MypageIntroContainer>
      {isEdit ? (
        <MdDone className="editBtn" onClick={handleSave} size={24} />
      ) : (
        <BsFillPencilFill className="editBtn" onClick={toggleEdit} />
      )}
      <BtnStyleContainer>
        <PurpleBtn onClick={handleDelete}>회원 탈퇴</PurpleBtn>
      </BtnStyleContainer>
    </MypageIntroWrap>
  );
}
