import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
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
  deleteInfo: () => void;
}

const useInput = (
  initial: string
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(initial);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [value, handleChange, setValue];
};

export default function MypageIntroduce({
  userData,
  deleteInfo,
}: MypageIntroduceProps) {
  const initialJob = userData?.job || 'What is your job?';
  const initialCareer = userData?.career || 'Career 1';
  const initialAwards = userData?.awards || 'Awards 1';

  const [job, handleJobEdit, setJob] = useInput(
    localStorage.getItem('job') || initialJob
  );
  const [career, handleCareerEdit, setCareer] = useInput(
    localStorage.getItem('career') || initialCareer
  );
  const [awards, handleAwardsEdit, setAwards] = useInput(
    localStorage.getItem('awards') || initialAwards
  );

  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    console.log('API 호출: 정보 저장', job, career, awards);
    setIsEdit(false);
    localStorage.setItem('job', job);
    localStorage.setItem('career', career);
    localStorage.setItem('awards', awards);
  };

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      deleteInfo();
      setJob(initialJob);
      setCareer(initialCareer);
      setAwards(initialAwards);
      navigate('/');
    }
  };

  return (
    <MypageIntroWrap>
      <MypageIntroContainer>
        <IntroduceTitle>Job</IntroduceTitle>
        {isEdit ? (
          <input type="text" value={job} onChange={handleJobEdit} />
        ) : (
          <p className="introContent">{job}</p>
        )}
      </MypageIntroContainer>
      <hr />
      <MypageIntroContainer>
        <IntroduceTitle>Career</IntroduceTitle>
        <ul>
          {isEdit ? (
            <input type="text" value={career} onChange={handleCareerEdit} />
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
            <input type="text" value={awards} onChange={handleAwardsEdit} />
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
