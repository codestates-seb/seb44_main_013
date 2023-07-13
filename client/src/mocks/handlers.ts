// src/mocks/handlers.js
import { rest } from 'msw';

import { portfolios, commuDetail } from './data';
import { commu } from './infiniteScrollData'

import { CommuProps } from '@/types';

const DaHamHandlers = [
  // 포트폴리오 정보 조회
  rest.get('/portfolios/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    const Portfolio = portfolios.filter((portfolio) => portfolio.portfolioId === portfolioId);
    portfolios.map((portfolio) => ++portfolio.views);
    return res(ctx.status(200), ctx.json({ data: Portfolio[0] }));
  }),
  // 포트폴리오 작성
  rest.post('/portfolios', async (req, res, ctx) => {
    const portfolioId = Math.floor(Math.random() * 100);
    const body = await req.json();
    const newPortfolio: Portfolio = {
      portfolioId: portfolioId,
      title: String(body.title),
      content: String(body.content),
      explains: body.explains,
      views: 0,
      modifiedAt: String(new Date()),
      createdAt: String(new Date()),
      category: body.category,
      member: {
        memberId: 1,
        name: 'noname',
        picture: 'https://lh3.google.com/u/0/ogw/AGvuzYbCDcprvYxmksNeswTW8vXMfMcfc9B8PbN4Lyvc=s64-c-mo',
      },
      tags: body.tags,
      likes: 0,
      isLiked: false,
      isMarked: false,
    }
    portfolios.push(newPortfolio);
    return res(
      ctx.status(201),
      ctx.json({ portfolioId: portfolioId })
    );
  }),
  // 좋아요 기능
  rest.post('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    let response = { likes: 0 };
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isLiked = true;
        response = { likes: ++portfolio.likes }
      }
    })
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.delete('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    let response = { likes: 0 };
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isLiked = false;
        response = { likes: --portfolio.likes };
      }
    })
    return res(ctx.status(200), ctx.json(response));
  }),
  // 북마크 기능
  rest.post('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isMarked = true;
      }
    })
    return res(ctx.status(200));
  }),
  rest.delete('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isMarked = false;
      }
    })
    return res(ctx.status(200));
  }),
];


/**0710 정연 Mypage 사용자 정보 수정 */
// mocks/handlers.ts
import { User, userData } from './data';
import { Portfolio } from '@/types';

const UserRequestHandlers = [
  rest.put<User>('/members', (req, res, ctx) => {
    Object.assign(userData, req.body);

    return res(ctx.json(userData));
  }),
  rest.get<User>('/members', (_, res, ctx) => {
    return res(ctx.json(userData));
  }),
  rest.delete<User>('/members', (_, res, ctx) => {
    // userData를 초기 상태로 재설정합니다.
    userData.name = 'Your Name';
    userData.job = 'What is your job?';
    userData.career = 'Career 1';
    userData.award = 'Awards 1';

    return res(
      ctx.status(200),
      ctx.json({ message: '삭제 성공' })
    );
  }),
];



//혜진 게시판 파트 
const HJHandlers = [
  //1. 게시판 목록 조회 GET : community-main page
  rest.get('/boards', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commu));
  }),
  //2. 게시한 상세 페이지 조회 GET : community-detail page
  rest.get('/boards/:id', (req, res, ctx) => {
    const id = Number(req.params.id);
    const filteredData = commuDetail.filter(e => e.id === id);
    return (res(ctx.status(200), ctx.json(filteredData)))
  }),
  //3. 댓글 수정
  rest.patch(`/comments/:comments_id`, async (req, res, ctx) => {
    const { comments_id, memberId, content, name } = await req.json();
    const filterdData = commuDetail.filter(el => el.id === 2);
    const index = (filterdData[0].comments).findIndex(el => el.comments_id === comments_id);

    const temp = {
      comments_id: comments_id,
      content: content,
      memberId: memberId,
      name: name,
      createdAt: "2023-06-23T17:34:51.3395597",
      modifiedAt: "2023-06-23T17:34:51.3395597",
      status: "POST_ACTIVE"
    };
    //console.log(temp);

    if (index !== -1) {
      (filterdData[0].comments)[index] = temp;
    }
    //console.log((filterdData[0].comment)[index])

    return res(ctx.status(200), ctx.json(temp));

  }),

  //4. 댓글 작성 
  rest.post('/comments', async (req, res, ctx) => {
    const board_id = 2;
    // const {  board_id } = await req.json();
    const filteredData = commuDetail.find(e => e.id === board_id);
    if (!filteredData) {
      return res(ctx.status(404), ctx.json({ message: '게시물을 찾을 수 없다.' }));
    }
    const comments_id = filteredData.comments.length || 0;

    const newPostData = {
      comments_id: comments_id + 1,
      content: (await req.json()).content,
      memberId: 1,
      name: 'jhj',
      createdAt: "2023-06-21T17:34:51.3395597",
      modifiedAt: "2023-06-21T17:34:51.3395597"
    }
    //filteredData.comment.push(newPostData);
    const index = commuDetail.findIndex(e => e.id === board_id);
    if (index !== -1) {
      commuDetail[index].comments.push(newPostData);
    }
    //console.log(commuDetail[1].comment);
    return res(ctx.status(200), ctx.json(newPostData));
  }),
  //5. 댓글 삭제
  rest.delete('/comments/:comments_id', async (req, res, ctx) => {
    const { comments_id } = await req.json();
    const filterdData = commuDetail.filter(el => el.id === 2);
    const index = (filterdData[0].comments).findIndex(el => el.comments_id === comments_id);
    const newArr = (filterdData[0].comments).slice(0, index).concat((filterdData[0].comments).slice(index + 1, -1))

    return res(ctx.json(200), ctx.json({ message: ' 댓글 삭제 성공 ', data: newArr }))
  })
];

// 게시판 등록 - 효정
const HyoHandler = [
  rest.post('/boards/write', async (req, res, ctx) => {
    const currentReq = await req.json();
    console.log(currentReq.body);

    const newCommunity: CommuProps = {
      board_id: 10,
      title: currentReq.body.title,
      content: currentReq.body.content.replace(/<\/?p[^>]*>/g, ''),
      view: 0,
      division: "recruitment",
      name: "phy",
      created_at: "2023-06-21T17:34:51.3395597",
      modifiedAt: "2023-06-21T17:34:51.3395597",
      member_id: 1,
      status: true
    }
    commu.unshift(newCommunity);
    return res(ctx.status(201), ctx.json(newCommunity));
  })
]

export const handlers = DaHamHandlers
  .concat(UserRequestHandlers)
  .concat(HJHandlers)
  .concat(HyoHandler);

