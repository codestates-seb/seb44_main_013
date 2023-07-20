import { GoBackButton, Row, SubmitButton } from '@/components/titleForm/TitleForm.styled';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import { PortfolioContent } from '@/types';
import { call } from '@/utils/apiService';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import useTitleForm from './useTitleForm';

interface FormButtonsProps {
  portfolio: PortfolioContent;
  setIsTitleFormOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormBouttons({ setIsTitleFormOpen, portfolio }: FormButtonsProps) {
  const navigate = useNavigate();
  // const { checkValidation } = useTitleForm();

  const postPortfolio = (body: PortfolioContent) => call('/portfolios', 'POST', body);
  const modifyPortfolio = (body: PortfolioContent) => call(`/portfolios/${portfolio.portfolioId}`, 'PATCH', body);

  const clickGoBackButton = () => {
    setIsTitleFormOpen(false);
  }

  const submitPortfolio = () => {
    const isModified = portfolio.portfolioId ? true : false;
    // const isValid = checkValidation(portfolio);
    // if (isValid) {
    //   const copiedPortfolio = JSON.parse(JSON.stringify(portfolio));
    //   delete copiedPortfolio.portfolioId;
    //   delete copiedPortfolio.createdAt;
    //   const body = copiedPortfolio;
    //   if (isModified) modifyPortfolio(body).then(() => navigate(`/portfolios/${portfolio.portfolioId}`))
    //   else postPortfolio(body).then((res) => navigate(`/portfolios/${res.portfolioId}`));
    // }
  };

  return (
    <Row gap={15}>
      <GoBackButton color='dark' onClick={clickGoBackButton}>
        <RiArrowGoBackFill size='25' color='white' />
      </GoBackButton>
      <SubmitButton color='light' onClick={submitPortfolio}>
        <BsCheck2 size='25' color='black' />
      </SubmitButton>
    </Row>
  )
}