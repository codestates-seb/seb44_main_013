import { ChangeEvent, useState, useEffect } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import {
  MypageIntroWrap,
  MypageIntroContainer,
  IntroduceTitle,
  BtnStyleContainer,
} from './MypageIntroduce.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

const useInput = (
  initial: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initial);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [value, handleChange];
};

export default function MypageIntroduce() {
  const [isEdit, setIsEdit] = useState(false);
  const [job, handleJobEdit] = useInput('What is your job?');
  const [career, handleCareerEdit] = useInput('Career 1');
  const [awards, handleAwardsEdit] = useInput('Awards 1');

  const Toggle = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    console.log('API 호출: 정보 저장', job, career, awards);
    setIsEdit(false);
    localStorage.setItem('job', job);
    localStorage.setItem('career', career);
    localStorage.setItem('awards', awards);
  };

  useEffect(() => {
    const storedJob = localStorage.getItem('job');
    const storedCareer = localStorage.getItem('career');
    const storedAwards = localStorage.getItem('awards');
    if (storedJob)
      handleJobEdit({
        target: { value: storedJob },
      } as ChangeEvent<HTMLInputElement>);
    if (storedCareer)
      handleCareerEdit({
        target: { value: storedCareer },
      } as ChangeEvent<HTMLInputElement>);
    if (storedAwards)
      handleAwardsEdit({
        target: { value: storedAwards },
      } as ChangeEvent<HTMLInputElement>);
  }, []);

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
        <BsFillPencilFill className="editBtn" onClick={Toggle} />
      )}
      <BtnStyleContainer>
        <PurpleBtn>회원 탈퇴</PurpleBtn>
      </BtnStyleContainer>
    </MypageIntroWrap>
  );
}
