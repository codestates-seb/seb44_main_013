/* 2023-07-14 이미지 핸들러 커스텀훅 - 김다함 */
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { setPictures } from '@/store/portfolioSlice';
import { call } from '@/utils/apiService';

export default function useImageHandler() {
  const dispatch = useDispatch();

  const uploadImage = (body: FormData) => call('/pictures', 'POST', body);

  const imageUrlHandler = useCallback((editor: any) => {
    const range = editor.getSelection();
    const url = prompt("");
    if (url) {
      editor.insertEmbed(range.index, "image", url);
    }
  }, [])

  const imageHandler = useCallback((editor: any) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("name", "file");
    input.setAttribute("multiple", "");
    input.click();

    input.onchange = async (event: any) => {
      const files: File = event?.target?.files;
      const formData = new FormData();
      formData.append("multipartFiles", files);
      uploadImage(formData)
        .then((res) => {
          res.imageUrl.forEach((url: string) => {
            dispatch(setPictures(url));
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection(range.index + 1);
          })
        })
    }
  }, [])

  return [imageUrlHandler, imageHandler] as const;
};