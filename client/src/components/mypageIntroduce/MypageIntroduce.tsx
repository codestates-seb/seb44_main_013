import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { User } from '@/mocks/data';

import { login } from '@/store/loginSlice';

import { MypageIntroWrap, MypageIntroContainer, IntroduceTitle, BtnStyleContainer } from './MypageIntroduce.styled';
import DeleteModal from '../modal/DeleteModal';

interface MypageIntroduceProps {
  user: User | null;
}

export default function MypageIntroduce({ user }: MypageIntroduceProps) {
  const initialJob = user?.job || 'What is your job?';
  const initialCareer = user?.career || 'Career 1';
  const initialAwards = user?.award || 'Awards 1';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [job, setJob] = useState(initialJob);
  const [career, setCareer] = useState(initialCareer);
  const [awards, setAwards] = useState(initialAwards);

  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInput =
    (setValue: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

  const handleUpdate = () => {
    axios
      .patch('/members', { job, career, awards })
      .then(() => {
        console.log('저장 성공');
        setIsEdit(false);
      })
      .catch((error) => {
        console.error('저장 실패', error);
      });
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    axios
      .delete('/members')
      .then(() => {
        console.log('삭제 성공');
        setDeleteModalOpen(false);
        //0713 혜진 추가
        dispatch(login(false));
        navigate('/members');
      })
      .catch((error) => {
        console.error('삭제 실패', error);
      });
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
            <input type="text" value={career} onChange={handleInput(setCareer)} />
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
            <input type="text" value={awards} onChange={handleInput(setAwards)} />
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
        <PurpleBtn onClick={handleOpenDeleteModal}>회원 탈퇴</PurpleBtn>
      </BtnStyleContainer>
      {isDeleteModalOpen && <DeleteModal onConfirm={handleConfirmDelete} onCancel={handleCloseDeleteModal} />}
    </MypageIntroWrap>
  );
}
