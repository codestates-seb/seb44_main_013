import ReactQuill from 'react-quill';
import { useState, useEffect, ChangeEventHandler } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
    const res = await axios.post('/api/boards/write', {
      title: title,
      content: post.replace(/<\/?p[^>]*>/g, ''),
      division: 'RECRUITMENT'
      // division 임시
    });

    console.log('갔어요! ' + res);
    navigate('/boards?division=RECRUITMENT');
  }

  const { id: communityNum } = useParams();
  // console.log(location.pathname);
  //url에서 boardId 받아옵니다. 
  // 최초 랜더링 시 해당 게시글을 reqct-quill에 뿌립니다. 
  // useEffect(() => {
  //   if(location.pathname === `/boards/edit/${communityNum}`){
  //     axios.get(`/api/boards/${communityNum}`)
  //     .then((res) => {
  //       setTitle(res.data.title);
  //       setPost(res.data.content);
  //     })
  //     .catch((err) => console.log(err));
  //   }

  // if(location.pathname === `/boards/edit`) {
  //   axios.post(`/api/boards/write`,  {
  //     headers: {
  //       widthCredentials: true,
  //     },
  //     body: postInformation,
  //   })
  //   .then(() => console.log('새글 등록 성공'))
  //   .catch((err) => console.log(err))

  //   navigate(`/boards/`)
  // }

  // }, [])
  if (location.pathname === `/boards/edit/${communityNum}`) {
    useEffect(() => {
      axios.get(`/api/boards/${communityNum}`)
        .then((res) => {
          setTitle(res.data.title);
          setPost(res.data.content);
        })
        .catch((err) => console.log(err));
    }, [])
  }

  const saveNewCommuData = () => {
    axios.patch(`/api/boards/edit/${communityNum}`, {
      title: title,
      content: post.replace(/<\/?p[^>]*>/g, '')
    })
      .then(() => navigate(`/boards/${communityNum}`))
      .catch((err) => console.log(err));
  }
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
              onChange={(event) => setPost(event)}
            />
            {/* KISS 원칙 Keep It Simple */}
            {/* (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor)  */}
            {
              location.pathname === '/boards/edit' ?
                <>
                  <SaveBtnContainer onClick={postCommunity}>
                    <PurpleBtn >Save</PurpleBtn>
                  </SaveBtnContainer>
                </> :
                <>
                  <SaveBtnContainer onClick={saveNewCommuData}>
                    <PurpleBtn >Save</PurpleBtn>
                  </SaveBtnContainer>
                </>
            }
          </TextEditor>
        </TextEditorContainer>
        <div className='guideContainer'>
          <Guide />
        </div>
      </EditorContainer>
    </>
  );
}