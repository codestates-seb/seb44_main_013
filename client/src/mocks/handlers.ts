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
    let response = { likes: 0 };
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        p.isLiked = true;
        response = { likes: ++p.likes }
      }
    })
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.delete('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    let response = { likes: 0 };
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        p.isLiked = false;
        response = { likes: --p.likes };
      }
    })
    return res(ctx.status(200), ctx.json(response));
  }),
  // 북마크 기능
  rest.post('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        p.isMarked = true;
      }
    })
    return res(ctx.status(200));
  }),
  rest.delete('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    portfolios.map((p) => {
      if (p.portfolio_id === portfolio_id) {
        p.isMarked = false;
      }
    })
    return res(ctx.status(200));
  })
];

export const handlers = DaHamHandlers;