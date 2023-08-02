import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { BsFillPencilFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { User } from '@/mocks/data';

import { login } from '@/store/loginSlice';

import {
  MypageIntroWrap,
  MypageIntroContainer,
  IntroduceTitle,
  BtnStyleContainer,
} from './MypageIntroduce.styled';
import DeleteModal from '../modal/DeleteModal';

interface MypageIntroduceProps {
  user: User | null;
}

export default function MypageIntroduce({ user }: MypageIntroduceProps) {
  const API_BASE_URL = 'http://localhost:5173'; // Update this with your backend API URL
  const initialJob = user?.job || '';
  const initialCareer = user?.career || '';
  const initialAwards = user?.award || '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { memberId } = useParams<{ memberId: string }>();

  const [job, setJob] = useState(initialJob);
  const [career, setCareer] = useState(initialCareer);
  const [award, setAwards] = useState(initialAwards);

  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

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
      .patch(`${API_BASE_URL}/members/${memberId}`, { job, career, award })
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
      .delete(`${API_BASE_URL}/members/${memberId}`)
      .then(() => {
        console.log('삭제 성공');
        setDeleteModalOpen(false);
        // 0713 혜진 추가
        dispatch(login(false));
        navigate('/'); // Navigate to the desired page after successful deletion
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
              value={award}
              onChange={handleInput(setAwards)}
            />
          ) : (
            <li className="introContent">{award}</li>
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
      {isDeleteModalOpen && (
        <DeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCloseDeleteModal}
        />
      )}
    </MypageIntroWrap>
  );
}
