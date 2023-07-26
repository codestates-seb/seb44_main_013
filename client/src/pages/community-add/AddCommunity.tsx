import ReactQuill from 'react-quill';
import { useState, ChangeEventHandler } from 'react';
import { useNavigate,} from 'react-router-dom';

import PurpleButton from '@/commons/atoms/buttons/PurpleBtn';

import {
  EditorContainer,
  TextEditorContainer,
  Guide,
  SaveBtnContainer,
  TextEditor,
  TitleAdd,
} from './AddCommunity.styled';

import 'react-quill/dist/quill.snow.css';
import netaxios from '@/utils/axiosIntercept';

export default function AddCommunity() {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link'],
    ],
  };

  // 상수로 빼는 방법도 있음!

  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const navigate = useNavigate();

  const handleTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };
  //새 등록인지 수정인지 한 페이지에서 관리
  // post 요청 body
  // const communityContent = {
  //   title: title,
  //   content: post.replace(/<\/?p[^>]*>/g, ''),
  // }

  //새 글 작성 함수
  const postCommunity = async () => {
    const roleDivision = window.localStorage.getItem('memberRole') === 'CLIENT' ? 'RECRUITMENT' : 'COOPERATION';
    const res = await netaxios.post('/boards/write', {
      title: title,
      content: post.replace(/<\/?p[^>]*>/g, '').replace(/<br\s*\/?>/gm, '\n'),
      division: roleDivision,
    });

    console.log('갔어요! ' + res);
    navigate(`/boards?division=${roleDivision}`);
  };

  return (
    <>
      {/* <CHeader /> */}
      <EditorContainer>
        <TextEditorContainer>
          <h1 className="addTitle">Edit Your Forum</h1>
          <TextEditor>
            <TitleAdd type="text" onChange={(e: any) => handleTitle(e)} value={title} />
            <hr />
            <ReactQuill
              theme="snow"
              modules={modules}
              className="reactQuillContainer"
              value={post}
              onChange={(event) => setPost(event)}
            />
            {/* KISS 원칙 Keep It Simple */}
            {/* (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor)  */}
            <SaveBtnContainer onClick={postCommunity}>
              <PurpleButton>Save</PurpleButton>
            </SaveBtnContainer>
          </TextEditor>
        </TextEditorContainer>
        <div className="guideContainer">
          <Guide />
        </div>
      </EditorContainer>
    </>
  );
}
