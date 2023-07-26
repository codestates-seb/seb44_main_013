// src/mocks/handlers.js
import { rest } from 'msw';
import { portfolios, commu, commuDetail } from './data';

const DaHamHandlers = [
  rest.get('/portfolios/:portfolio_id', (req, res, ctx) => {
    const portfolio_id = Number(req.params.portfolio_id);
    const Portfolio = portfolios.filter((p) => p.portfolio_id === portfolio_id);
    return res(ctx.status(200), ctx.json(Portfolio[0]));
  })
];


/**0710 정연 Mypage 사용자 정보 수정 */
// mocks/handlers.ts
import { setupWorker} from "msw";
import { UserData, userData } from './data';

const UserRequestHandlers = [
  rest.put<UserData>('/members', (req, res, ctx) => {
    Object.assign(userData, req.body);

    return res(ctx.json(userData));
  }),
  rest.get<UserData>('/members', (_, res, ctx) => {
    return res(ctx.json(userData));
  }),
  rest.delete<UserData>('/members', (_, res, ctx) => {
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

export const worker = setupWorker(...UserRequestHandlers);
export { UserRequestHandlers };



//혜진 게시판 파트 
const HJHandlers = [
  //1. 게시판 목록 조회 GET : community-main page
  rest.get('/boards', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commu));
  }),
  //2. 게시한 상세 페이지 조회 GET : community-detail page
  rest.get('/boards/:board_id', (req, res, ctx) => {
    const board_id = Number(req.params.board_id);
    const filteredData = commuDetail.filter(e => e.board_id === board_id);
    return (res(ctx.status(200), ctx.json(filteredData)))
  }),
  //3. 댓글 수정
  rest.patch(`/comments/:comments_id`, async(req, res, ctx) => {
    const { comments_id, member_id, content, name } = await req.json();
    const filterdData = commuDetail.filter(el => el.board_id === 2);
    const index = (filterdData[0].comment).findIndex(el => el.comments_id === comments_id);  

    const temp = {
      comments_id: comments_id,
      content: content,
      member_id: member_id,
      name: name,
      createdAt: "2023-06-23T17:34:51.3395597",
      modifiedAt: "2023-06-23T17:34:51.3395597"
    };

    if(index !== -1){
      (filterdData[0].comment)[index]  = temp;
    }
    //console.log((filterdData[0].comment)[index])

    return res(ctx.status(200), ctx.json( temp ));

  }),

  //4. 댓글 작성 
  rest.post('/comments', async(req, res, ctx) => {
     const board_id = 2;
    // const {  board_id } = await req.json();
    const filteredData = commuDetail.find(e => e.board_id === board_id); 
    if(!filteredData){
      return res(ctx.status(404), ctx.json({message: '게시물을 찾을 수 없다.'}));
    }
    const comments_id  = filteredData.comment.length || 0;
  
    const newPostData = {
      comments_id: comments_id+1,
      content: (await req.json()).content,
      member_id: 1,
      name: 'jhj',
      createdAt: "2023-06-21T17:34:51.3395597",
      modifiedAt:"2023-06-21T17:34:51.3395597"
    }
    //filteredData.comment.push(newPostData);
    const index = commuDetail.findIndex(e => e.board_id === board_id);
    if(index !== -1){
      commuDetail[index].comment.push(newPostData);
    }
    //console.log(commuDetail[1].comment);
    return res(ctx.status(200), ctx.json(newPostData));
  }),
];



export const handlers = DaHamHandlers
  // .concat(UserHandlers)
  .concat(HJHandlers);

