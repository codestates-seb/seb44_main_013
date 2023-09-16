import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { INITIAL_PORTFOLIO } from '@/types/initials';

import { pictures, portfolio, setPortfolio } from '@/store/portfolioSlice';
import { checkValidation, createSubmissionPortfolio, deleteImageUrls, modifyPortfolio, postPortfolio } from './utils';

export default function useTitleForm() {
  const savedPortfolio = useSelector(portfolio);
  const savedPictures = useSelector(pictures);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitPortfolio = async () => {
    const isModified = savedPortfolio.id ? true : false;
    const isValid = checkValidation(savedPortfolio);
    const submissionPortfolio = createSubmissionPortfolio(savedPortfolio);

    deleteImageUrls(savedPortfolio.content, savedPictures);

    if (!isValid) return;

    if (isModified) {
      await modifyPortfolio(submissionPortfolio, savedPortfolio.id as string);
      await navigate(`/portfolios/${savedPortfolio.id}`);
      dispatch(setPortfolio(INITIAL_PORTFOLIO));
      return;
    }

    await postPortfolio(submissionPortfolio);
    await navigate(`/main`);
    dispatch(setPortfolio(INITIAL_PORTFOLIO));
    return;
  };

  return { submitPortfolio };
}