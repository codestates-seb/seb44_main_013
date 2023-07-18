import { Dispatch, SetStateAction } from 'react';
import { PortfolioContent } from '@/types';

export interface Quill {
  htmlContent: string;
  setContentHandler: Dispatch<SetStateAction<string>>;
  isTitleFormOpen: boolean;
}

export interface TitleForm {
  setIsTitleFormOpen: Dispatch<SetStateAction<boolean>>;
  htmlContent: string;
  portfolio: PortfolioContent;
  setPortfolio: Dispatch<SetStateAction<PortfolioContent>>;
  portfolioId?: string | null;
}