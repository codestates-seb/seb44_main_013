/* 2023-07-14 이미지 핸들러 커스텀훅 - 김다함 */
import { useCallback } from 'react';

import { call } from '@/utils/apiService';

// 이미지 업로드 순서
// 1. 파일 탐색기에서 이미지 선택
// 2. 이미지 받아오면 받아 오자마자 서버로 보냅니다.
// 3. 이미지 저장 성공 여부, 이미지의 url + id
// 4. 상태에 이미지 url 업데이트
// 5. react-quill 에디터에 있는 이미지를 서버꺼랑 바꿔치기
// 6. 삭제하는 경우에는: 바꿔치기된 것의 id 혹은 url을 포함하여 요청을 서버에 날려주면 됨.
// 7. 되돌리기를 한다? -> 서버에 삭제표시했던 이미지 다시 가져오셈


export default function useImageHandler() {
  const uploadImage = (body: FormData) => call('/pictures', 'POST', body);

  const imageUrlHandler = useCallback((editor: any) => {
    const range = editor.getSelection();
    const url = prompt("");
    if (url) {
      editor.insertEmbed(range.index, "image", url);
    }
  }, [])

  const imageHandler = useCallback((editor: any) => {
    console.log(editor);
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("name", "file");
    input.click();

    input.onchange = async (event: any) => {
      const file: File = event?.target?.files[0];
      const formData = new FormData();
      formData.append("file", file);
      uploadImage(formData)
        .then((res) => {
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", res.imageUrl);
          editor.setSelection(range.index + 1);
        })
    }
  }, [])

  return [imageUrlHandler, imageHandler] as const;
};