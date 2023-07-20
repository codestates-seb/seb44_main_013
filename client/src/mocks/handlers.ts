// src/mocks/handlers.js
import { rest } from 'msw';

import { portfolios, commuDetail, pictures } from './data';
import {
  commu,
  WebCategoryDatas,
  AppCategoryDatas,
  AnimationCategoryDatas,
  GraphicCategoryDatas,
  PhotoCategoryDatas,
} from './infiniteScrollData';

import { CommuProps, Portfolio } from '@/types';

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
      isMine: true,
    };
    portfolios.push(newPortfolio);
    return res(ctx.status(201), ctx.json({ portfolioId: portfolioId }));
  }),
  // 포트폴리오 수정
  rest.patch('/portfolios/:portfolio_id', async (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    const body = await req.json();
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) portfolio = Object.assign(portfolio, body);
    });
    return res(ctx.status(201));
  }),
  // 포트폴리오 삭제
  rest.delete('/portfolios/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    portfolios.forEach((portfolio, index) => {
      if (portfolio.portfolioId === portfolioId) portfolios.splice(index, 1);
    });
    return res(ctx.status(201));
  }),
  // 좋아요 기능
  rest.post('/likes/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    let response = { likes: 0 };
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isLiked = true;
        response = { likes: ++portfolio.likes };
      }
    });
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
    });
    return res(ctx.status(200), ctx.json(response));
  }),
  // 북마크 기능
  rest.post('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isMarked = true;
      }
    });
    return res(ctx.status(200));
  }),
  rest.delete('/bookmarks/:portfolio_id', (req, res, ctx) => {
    const portfolioId = Number(req.params.portfolio_id);
    portfolios.map((portfolio) => {
      if (portfolio.portfolioId === portfolioId) {
        portfolio.isMarked = false;
      }
    });
    return res(ctx.status(200));
  }),
  // 이미지 업로드
  rest.post('/pictures', async (_, res, ctx) => {
    const imageUrl =
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNHigT%2Fbtsh337vdan%2FfeUoGQjbwxsO4jQ8s18b41%2Fimg.png';
    pictures.push({ portfolioId: 0, filename: imageUrl });
    return res(ctx.status(200), ctx.json({ imageUrl: imageUrl }));
  }),
];

/**0710 정연 Mypage 사용자 정보 수정 */
// mocks/handlers.ts
import { User, userData } from './data';
// import { Portfolio } from '@/types';

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

    return res(ctx.status(200), ctx.json({ message: '삭제 성공' }));
  }),
];

//혜진 게시판 파트
const HJHandlers = [
  //1. 게시판 목록 조회 GET : community-main page
  //url-> http://localhost:8080/boards?division=COOPERATION
  // rest.get('/boards', (req, res, ctx) => {
  //   const division = req.url.searchParams.get('division');

  //   if (division === 'COOPERATION') {
  //     const filteredData = commu.filter((element) => element.division === 'COOPERATION');
  //     return res(ctx.status(200), ctx.json(filteredData));
  //   }

  //   if (division === 'RECRUITMENT') {
  //     const filteredData = commu.filter((element) => element.division === 'RECRUITMENT');
  //     return res(ctx.status(200), ctx.json(filteredData));
  //   }
  // }),

  //2. 게시한 상세 페이지 조회 GET : community-detail page
  // rest.get('/boards/:id', (req, res, ctx) => {
  //   const id = Number(req.params.id);
  //   const filteredData = commuDetail.filter(e => e.id === id);
  //   return (res(ctx.status(200), ctx.json(filteredData)))
  // }),
  //3. 댓글 수정
  rest.patch(`/comments/:comments_id`, async (req, res, ctx) => {
    const { comments_id, memberId, content, name } = await req.json();
    const filterdData = commuDetail.filter((el) => el.id === 2);
    const index = filterdData[0].comments.findIndex((el) => el.comments_id === comments_id);

    const temp = {
      comments_id: comments_id,
      content: content,
      memberId: memberId,
      name: name,
      createdAt: '2023-06-23T17:34:51.3395597',
      modifiedAt: '2023-06-23T17:34:51.3395597',
      status: 'POST_ACTIVE',
    };
    //console.log(temp);

    if (index !== -1) {
      filterdData[0].comments[index] = temp;
    }
    //console.log((filterdData[0].comment)[index])

    return res(ctx.status(200), ctx.json(temp));
  }),

  //4. 댓글 작성
  rest.post('/comments', async (req, res, ctx) => {
    const board_id = 2;
    // const {  board_id } = await req.json();
    const filteredData = commuDetail.find((e) => e.id === board_id);
    if (!filteredData) {
      return res(ctx.status(404), ctx.json({ message: '게시물을 찾을 수 없다.' }));
    }
    const comments_id = filteredData.comments.length || 0;

    const newPostData = {
      comments_id: comments_id + 1,
      content: (await req.json()).content,
      memberId: 1,
      name: 'jhj',
      createdAt: '2023-06-21T17:34:51.3395597',
      modifiedAt: '2023-06-21T17:34:51.3395597',
    };
    //filteredData.comment.push(newPostData);
    const index = commuDetail.findIndex((e) => e.id === board_id);
    if (index !== -1) {
      commuDetail[index].comments.push(newPostData);
    }
    //console.log(commuDetail[1].comment);
    return res(ctx.status(200), ctx.json(newPostData));
  }),
  //5. 댓글 삭제
  rest.delete('/comments/:comments_id', async (req, res, ctx) => {
    const { comments_id } = await req.json();
    const filterdData = commuDetail.filter((el) => el.id === 2);
    const index = filterdData[0].comments.findIndex((el) => el.comments_id === comments_id);
    const newArr = filterdData[0].comments.slice(0, index).concat(filterdData[0].comments.slice(index + 1, -1));

    return res(ctx.json(200), ctx.json({ message: ' 댓글 삭제 성공 ', data: newArr }));
  }),

  // //로그인1 : get google
  // rest.get('/oauth2/authorization/google ', async (_, res, ctx) => {
  //   const credential = 'dummy-credential-code';
  //   return res(ctx.status(200), ctx.json('handler에서 성공 GET '))
  // }),

  // //로그인 temp : accesstoken 처리
  // rest.post('/members/temp', async(req, res, ctx) => {
  //   const { code } = await req.json();
  //   console.log(code);
  //   const accesToken = 'dummy-access-token';
  //   return res(ctx.status(200), ctx.set('accessToken', accesToken));
  // }),

  //로그인2 : post server
  // rest.post('/members', async (req, res, ctx) => {
  //   const accessToken = 'dummy-access-token';
  //   const { role } = await req.json();

  //   return res(
  //     ctx.status(200),
  //     ctx.json('로그인 성공'),
  //     //응답 객체 헤더 설정 accesstoken 전달
  //     ctx.set('authorization', `Bearer ${accessToken}`),
  //     ctx.set('accessToken', accessToken),
  //     ctx.set('isLogin', 'true'),
  //     ctx.set('memberRole', role)
  //   )
  // }),
  //로그아웃
  // rest.get('/members/logout', async (_, res, ctx) => {
  //   return res(ctx.status(200), ctx.json('logout 성공'));
  // }),

  //메인 카테고리별 조회 web
  rest.get(`/portfolios`, async (req, res, ctx) => {
    const category = req.url.searchParams.get('category');

    if (category === 'web') {
      return res(ctx.status(200), ctx.json(WebCategoryDatas));
    } else if (category === 'app') {
      return res(ctx.status(200), ctx.json(AppCategoryDatas));
    } else if (category === '3danimation') {
      return res(ctx.status(200), ctx.json(AnimationCategoryDatas));
    } else if (category === 'graphicdesign') {
      return res(ctx.status(200), ctx.json(GraphicCategoryDatas));
    } else if (category === 'photo') {
      return res(ctx.status(200), ctx.json(PhotoCategoryDatas));
    }
  }),

  //0719 새로운 로그인
  // rest.post('/members', async(req, res, ctx) => {
  //   const {memberRole} = await req.json();

  //   return res((ctx.status(200)), ctx.json(`당신은 ${memberRole} 입니다.! `))
  // })
];

// 게시판 등록 - 효정
const HyoHandler = [
  rest.post('/boards/write', async (req, res, ctx) => {
    const currentReq = await req.json();
    console.log(currentReq.body);

    const newCommunity: CommuProps = {
      id: 10,
      title: currentReq.body.title,
      content: currentReq.body.content.replace(/<\/?p[^>]*>/g, ''),
      view: 0,
      division: 'recruitment',
      name: 'phy',
      created_at: '2023-06-21T17:34:51.3395597',
      modifiedAt: '2023-06-21T17:34:51.3395597',
      memberId: 1,
      status: 'POST_ACTIVE',
    };
    commu.unshift(newCommunity);
    return res(ctx.status(201), ctx.json(newCommunity));
  }),
];

export const handlers = DaHamHandlers
  // .concat(UserRequestHandlers)
  .concat(HJHandlers);
// .concat(HyoHandler);
