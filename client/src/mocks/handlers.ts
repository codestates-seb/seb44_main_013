// src/mocks/handlers.js
import { rest } from 'msw';
import { portfolios } from './data';

const DaHamHandlers = [
  rest.get('/portfolios/:portfolioId', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolioId);
    const Portfolio = portfolios.filter((p) => p.portfolioId === portfolioId);
    return res(ctx.status(200), ctx.json(Portfolio[0]));
  })
];

export const handlers = DaHamHandlers;