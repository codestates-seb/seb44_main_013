/* 2023-07-14 이미지 핸들러 커스텀훅 - 김다함 */
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { pictures, setPictures } from '@/store/portfolioSlice';
import { call } from '@/utils/apiService';
import { Picture } from '@/types';

export default function useImageHandler() {
  const dispatch = useDispatch();

  const uploadPicture = (body: FormData) => call('/pictures', 'POST', body);
  const deletePicture = (body: Picture) => call(`portfolios/s3/picture`, 'DELETE', body);

  const imageUrlHandler = useCallback((editor: any) => {
    const range = editor.getSelection();
    const url = prompt("");
    if (url) {
      editor.insertEmbed(range.index, "image", url);
    }
  }, []);

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
      uploadPicture(formData)
        .then((res) => {
          res.imageUrl.forEach((url: string) => {
            dispatch(setPictures(url));
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection(range.index + 1);
          })
        })
    }
  }, []);

  const deleteImageUrls = useCallback((htmlContent: string) => {
    const savedImageUrl = useSelector(pictures);
    savedImageUrl.forEach((url: string) => {
      const isImageUrlRemoved = !htmlContent.includes(url);
      if (isImageUrlRemoved) deletePicture({ fileName: url })
    })
  }, []);

  return [imageUrlHandler, imageHandler, deleteImageUrls] as const;
};
