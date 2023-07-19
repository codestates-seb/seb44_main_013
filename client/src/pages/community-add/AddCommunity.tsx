import ReactQuill from 'react-quill';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
// import { CommuProps } from '@/types';

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
  const location = useLocation();

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  //새 등록인지 수정인지 한 페이지에서 관리 
  //  post 요청 body
  const postInformation = {
    title: title,
    content: post,
    division: 'RECRUITMENT',
  }

  //새 글 작성 함수
  // const postCommunity = () => {
  //   axios.post('/api/boards/write', {
  //       headers: {
  //         widthCredentials: true,
  //       },
  //       body: postInformation,
  //     }
  //   )  
  //   .then((res) => console.log('post 요청 성공 ' + res))
  //   .catch((err) => console.log(err));

  //   navigate('/boards?division=RECRUITMENT');
  // }

  // patch 요청
  // 게시글 클릭했을 때의 게시글 number로 api 보내서 get 요청 해 res 받아오기
  // 받아온 res 제목과 내용에 각각 배치
  // 배치한 내용에서(원본) 수정한다면 patch요청 보내기
  // const communityNum = 1; // 임시로
  const { id: communityNum } = useParams();
  //url에서 boardId 받아옵니다. 
  // 최초 랜더링 시 해당 게시글을 reqct-quill에 뿌립니다. 
  useEffect(() => {
    if(location.pathname === `/boards/${communityNum}`){
      axios.get(`/api/boards/${communityNum}`)
      .then((res) => {
        setTitle(res.data.title);
        setPost(res.data.content);
      })
      .catch((err) => console.log(err));
    }

    if(location.pathname === `/boards/write`) {
      axios.post(`/api/boards/write`,  {
        headers: {
          widthCredentials: true,
        },
        body: postInformation,
      })
      .then(() => console.log('새글 등록 성공'))
      .catch((err) => console.log(err))

      navigate(`/boards/`)
    }

  }, [])

  const saveNewCommuData = () =>  {
    axios.patch(`/api/boards/edit/${communityNum}`, {
      title: title,
      content: post
    })
    .then(() => navigate(`/boards/${communityNum}`))
    .catch((err) => console.log(err));

    
  }

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
            <TitleAdd type="text" onChange={(e: any) => handleTitle(e)} value={title} />
            <hr />
            <ReactQuill
              theme="snow"
              modules={modules}
              className='reactQuillContainer'
              value={post}
              onChange={(event)=> setPost(event)}
            />
            {/* (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor)  */}
            <SaveBtnContainer onClick={saveNewCommuData}>
              <PurpleBtn >Save</PurpleBtn>
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