import { Picture, PortfolioContent, Tag } from '@/types';
import { call } from '@/utils/apiService';

export const postPortfolio = (body: PortfolioContent) => call('/portfolios', 'POST', body);
export const modifyPortfolio = (body: PortfolioContent, id: string) => call(`/portfolios/${id}`, 'PATCH', body);
export const deletePicture = (body: Picture) => call(`portfolios/s3/picture`, 'DELETE', body);

export const alertValidation = (message: string) => {
  alert(message);
  return false;
};

export const checkValidation = (portfolio: PortfolioContent) => {
  // if (savedPictures.length < 1) return alertValidation('이미지를 1개 이상 첨부해주세요.');
  if (portfolio.title.length < 1 || portfolio.title.length > 30)
    return alertValidation('제목은 1자 이상 30자 미만으로 작성해주세요.');
  if (portfolio.tags.length < 1) return alertValidation('태그를 최소 1개 이상 선택해주세요.');
  if (portfolio.explains.length < 1 || portfolio.explains.length > 300)
    return alertValidation('소개글은 1자 이상 300자 미만으로 작성해주세요.');
  return true;
};

export const deleteImageUrls = (htmlContent: string, savedPictures: string[]) => {
  savedPictures.forEach((url: string) => {
    const isImageUrlRemoved = !htmlContent.indexOf(url);
    if (isImageUrlRemoved) deletePicture({ fileName: url });
  });
};

export const changeArraytoString = (tags: Array<Tag>) => {
  let arrayString = '[';
  tags.forEach((tag: Tag) => {
    arrayString = arrayString.concat('{id:' + tag.id + ", name:'" + tag.name + "'},");
  });
  arrayString = arrayString.slice(0, -1);
  arrayString = arrayString + ']';
  return arrayString;
};

export const createSubmissionPortfolio = (portfolio: PortfolioContent) => {
  const copiedPortfolio = JSON.parse(JSON.stringify(portfolio));

  const updatedPortfolio = {
    ...copiedPortfolio,
    tags: changeArraytoString(copiedPortfolio.tags),
    content: copiedPortfolio.content.replace(/"/g, "'"),
  }

  const { portfolioId, createdAt, ...restUpdatedPortfolio } = updatedPortfolio;

  return restUpdatedPortfolio;
}