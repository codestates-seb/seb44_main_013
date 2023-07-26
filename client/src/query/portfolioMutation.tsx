/* 2023-07-12 포트폴리오 작성 Mutation - 김다함 */

import { portfolioContentType } from '@/types';
import { call } from '@/utils/ApiService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const usePortfolioMutation = () => {
  const navigate = useNavigate();
  const portfolioMutation = useMutation({
    mutationFn: (data: portfolioContentType) => call('/portfolios', 'POST', data),
    onSuccess(data) {
      navigate(`/portfolios/${data.portfolio_id}`);
    },
  });
  return portfolioMutation;
};

export default usePortfolioMutation;