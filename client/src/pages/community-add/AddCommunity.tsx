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
import { useState } from 'react';
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
  // console.log(boards);

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
