import ReactQuill from 'react-quill';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

import {
  EditorContainer,
  TextEditorContainer,
  Guide,
  SaveBtnContainer,
  TextEditor,
  TitleAdd,
} from './AddCommunity.styled';

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
  
  // post 요청

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // react-quill 테스트용
  const postInformation = {
    title: title,
    content: post,
  }

  const postCommunity = () => {
    axios.post('/boards/write', {
        headers: {
          "Content-Type": "application/json"
        },
        body: postInformation,
      }
    )  
    .then((res) => console.log('post 요청 성공 ' + res))
    .catch((err) => console.log(err));

    navigate('/boards');
  }

  //  console.log(postInformation);
  //  console.log(post);

  // patch 요청
  // 게시글 클릭했을 때의 게시글 number로 api 보내서 get 요청 해 res 받아오기
  // 받아온 res 제목과 내용에 각각 배치
  // 배치한 내용에서(원본) 수정한다면 patch요청 보내기
  const communityNum = 1; // 임시로
  useEffect(() => {
    axios.get(`/boards/:${communityNum}`)
    .then((res) => console.log(res.data[0]))
    .catch((err) => console.log(err));
  }, [])

  // const changeCommunity = () => {
  //   axios.patch(`/boards/edit/:${communityNum}`, postInformation)
  // }  : 임시 주석

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
              value={post}
              onChange={(e)=> setPost(e)}
            />
            {/* replace(/<\/?p[^>]*>/g, '') */}
            {/* (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor)  */}
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