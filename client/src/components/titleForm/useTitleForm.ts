import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Picture, PortfolioContent } from '@/types';

import { pictures, portfolio } from '@/store/portfolioSlice';

import { call } from '@/utils/apiService';

export default function useTitleForm() {
  const savedPortfolio = useSelector(portfolio);
  const navigate = useNavigate();

  const postPortfolio = (body: PortfolioContent) => call('/portfolios', 'POST', body);
  const modifyPortfolio = (body: PortfolioContent) => call(`/portfolios/${savedPortfolio.portfolioId}`, 'PATCH', body);
  const deletePicture = (body: Picture) => call(`portfolios/s3/picture`, 'DELETE', body);

  const alertValidation = (message: string) => { alert(message); return false };

  const checkValidation = (portfolio: PortfolioContent) => {
    if (portfolio.content.length < 50) return alertValidation('본문을 50자 이상 작성해주세요.');
    if (portfolio.title.length < 5) return alertValidation('제목을 5글자 이상 작성해주세요.');
    if (portfolio.tags.length < 1) return alertValidation('태그를 최소 1개 이상 선택해주세요.');
    if (portfolio.explain.length < 1 || portfolio.explain.length > 300) return alertValidation('소개글은 1자 이상 300자 미만으로 작성해주세요.');
    return true;
  }

  const deleteImageUrls = () => {
    const savedImageUrl = useSelector(pictures);
    savedImageUrl.forEach((url: string) => {
      const isImageUrlRemoved = !savedPortfolio.content.includes(url);
      if (isImageUrlRemoved) deletePicture({ fileName: url })
    })
  }

  const submitPortfolio = () => {
    const isModified = savedPortfolio.portfolioId ? true : false;
    const isValid = checkValidation(savedPortfolio);
    deleteImageUrls();
    if (isValid) {
      const copiedPortfolio = JSON.parse(JSON.stringify(savedPortfolio));
      delete copiedPortfolio.portfolioId;
      delete copiedPortfolio.createdAt;
      const body = copiedPortfolio;
      if (isModified) modifyPortfolio(body).then(() => navigate(`/portfolios/${savedPortfolio.portfolioId}`))
      else postPortfolio(body).then((res) => navigate(`/portfolios/${res.portfolioId}`));
    }
  };

  return { submitPortfolio };
}
