import {
  EditorContainer,
  TextEditorContainer,
  Guide,
  SaveBtnContainer,
  TextEditor,
  TitleAdd,
} from './AddCommunity.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      ['link', 'image', 'video'],
    ],
  };
  
  // post 요청

  const [title, setTitle] = useState("");
  const [quillText, setQuillText] = useState("");
  const navigate = useNavigate();

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // react-quill 테스트용
  const bodyReq = {
    title: title,
    content: quillText,
  }

  const postCommunity = () => {
    axios.post('/community/add', {
        headers: {
          "Content-Type": "application/json"
        },
        body: bodyReq,
      }
    )  
    .then((res) => console.log(res.body))
    .catch((err) => console.log(err));

    navigate('/boards');
  }

  // patch 요청
  // 게시글 클릭했을 때의 게시글 number로 api 보내서 get 요청 해 res 받아오기
  // 받아온 res 제목과 내용에 각각 배치
  // 배치한 내용에서(원본) 수정한다면 patch요청 보내기
  const communityNum = 1; // 임시로
  useEffect(() => {
    axios.get(`/community`)
    .then((res) => console.log(res.data[0]))
    .catch((err) => console.log(err));
  }, [])

  const changeCommunity = () => {
    axios.patch('/community', bodyReq)
  }

  // community 뒤에 게시글 id 넣기
  // create, patch 를 같은 페이지에서 게시글 number params 여부에 따라
  // get 넣을지 안 넣을지 선택, value에 조건부 렌더링

  return (
    <>
      {/* <CHeader /> */}
      <EditorContainer>
        <TextEditorContainer>
          <h1 className='addTitle'>Edit Your Forum</h1>
          <TextEditor>
            <TitleAdd type="text" onChange={(e: any) => handleTitle(e)} />
            <hr />
            <ReactQuill
              theme="snow"
              modules={modules}
              className='reactQuillContainer'
              value={quillText}
              onChange={(e: any) => setQuillText(e.replace(/<\/?p[^>]*>/g, ''))}
            />
            <SaveBtnContainer onClick={postCommunity}>
              <PurpleBtn>Save</PurpleBtn>
            </SaveBtnContainer>
          </TextEditor>
        </TextEditorContainer>
        <div className='guideContainer'>
          <Guide />
        </div>
      </EditorContainer>
    </>
  );
}
