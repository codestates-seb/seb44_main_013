// src/mocks/handlers.js
import { rest } from 'msw';
import { portfolios } from './data';

const DaHamHandlers = [
  // 포트폴리오 정보 조회
  rest.get('/portfolios/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    const Portfolio = portfolios.filter((p) => p.portfolio_id === portfolio_id);
    return res(ctx.status(200), ctx.json(Portfolio[0]));
  }),
  // 좋아요 기능
  rest.post('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    let likes = 0;
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        likes = ++p.likes;
        p.isLike = true
      }
    })
    return res(ctx.status(200), ctx.json({ likes: likes }));
  }),
  rest.post('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    let likes = 0;
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        likes = --p.likes;
        p.isLike = false
      }
    })
    return res(ctx.status(200), ctx.json({ likes: likes }));
  })
];

export const handlers = DaHamHandlers;