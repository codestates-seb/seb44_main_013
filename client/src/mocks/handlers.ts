// src/mocks/handlers.js
import { rest } from 'msw';
import { portfolios } from './data';

const DaHamHandlers = [
  rest.get('/portfolios/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    const Portfolio = portfolios.filter((p) => p.portfolio_id === portfolio_id);
    return res(ctx.status(200), ctx.json(Portfolio[0]));
  })
];

export const handlers = DaHamHandlers;



/**0710 정연 Mypage 사용자 정보 수정 */
// mocks/handlers.ts
import { UserData, userData } from './data';

const UserHandlers = [
  rest.put<UserData>('/members', (req, res, ctx) => {
    Object.assign(userData, req.body);

    return res(ctx.json(userData));
  }),
  rest.get<UserData>('/members', (req, res, ctx) => {
    return res(ctx.json(userData));
  }),
];

export { UserHandlers };

