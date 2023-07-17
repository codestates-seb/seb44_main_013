/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { useCallback } from 'react';

import { call } from '@/utils/apiService';

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