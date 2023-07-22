import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Picture, PortfolioContent } from '@/types';

import { pictures, portfolio } from '@/store/portfolioSlice';
import { call } from '@/utils/apiService';


export default function useTitleForm() {
  const savedPortfolio = useSelector(portfolio);
  const savedPictures = useSelector(pictures);
  const navigate = useNavigate();

  const postPortfolio = (body: PortfolioContent) => call('/portfolios', 'POST', body);
  const modifyPortfolio = (body: PortfolioContent) => call(`/portfolios/${savedPortfolio.id}`, 'PATCH', body);
  const deletePicture = (body: Picture) => call(`portfolios/s3/picture`, 'DELETE', body);

  const alertValidation = (message: string) => { alert(message); return false };

  const checkValidation = (portfolio: PortfolioContent) => {
    if (savedPictures.length < 1) return alertValidation('이미지를 1개 이상 첨부해주세요.');
    if (portfolio.title.length < 1 || portfolio.title.length > 30) return alertValidation('제목은 1자 이상 30자 미만으로 작성해주세요.');
    if (portfolio.tags.length < 1) return alertValidation('태그를 최소 1개 이상 선택해주세요.');
    if (portfolio.explains.length < 1 || portfolio.explains.length > 300) return alertValidation('소개글은 1자 이상 300자 미만으로 작성해주세요.');
    return true;
  }

  const deleteImageUrls = (htmlContent: string) => {
    savedPictures.forEach((url: string) => {
      const isImageUrlRemoved = !htmlContent.indexOf(url);
      if (isImageUrlRemoved) deletePicture({ fileName: url })
    })
  };

  const submitPortfolio = () => {
    const isModified = savedPortfolio.id ? true : false;
    const isValid = checkValidation(savedPortfolio);
    deleteImageUrls(savedPortfolio.content);
    if (isValid) {
      const copiedPortfolio = JSON.parse(JSON.stringify(savedPortfolio));
      delete copiedPortfolio.portfolioId;
      delete copiedPortfolio.createdAt;
      const body = copiedPortfolio;
      if (isModified) modifyPortfolio(body).then(() => navigate(`/portfolios/${savedPortfolio.id}`))
      else postPortfolio(body).then((res) => navigate(`/portfolios/${res.portfolioId}`));
    }
  };

  return { submitPortfolio };
}
