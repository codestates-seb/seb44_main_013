/* 2023-07-07 Portfolio Dtail Page Data - 김다함 */
import { Picture, Portfolio } from '@/types';

export const portfolios: Array<Portfolio> = [
  {
    id: 1,
    title: '뉴진스의 음악',
    content:
      '<iframe src="https://www.youtube.com/embed/pK20ppd_YQI" title="New jeans all music playlist [Updated] July 2023 🌷" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n<p dir="auto"><br/><br/>뉴진스의 음악입니다.',
    explains: '뉴진스 음악 포트폴리오',
    view: 30,
    createdAt: '2023-06-21T17:34:51.3395597',
    modifiedAt: '2023-06-21T17:34:51.3395597',
    category: {
      id: 1,
      name: 'web',
    },
    member: {
      id: 4,
      name: '민희진',
      imageUrl: 'https://lh3.google.com/u/0/ogw/AGvuzYbCDcprvYxmksNeswTW8vXMfMcfc9B8PbN4Lyvc=s64-c-mo',
    },
    tags: [
      {
        id: 1,
        name: 'music',
        isSelected: false,
      },
      {
        id: 2,
        name: 'video',
        isSelected: false,
      },
    ],
    countLikes: 20,
    marked: false,
    liked: true,
    writer: true,
  },
];

export const pictures: Array<Picture> = [];

/*2023-07-10 Mypage User Information - 위정연 */
export interface User {
  name: string;
  job: string;
  career: string;
  award: string;
}

export const userData: User = {
  name: 'unknown',
  job: 'What is your job?',
  career: 'Career 1',
  award: 'Awards 1',
};

//혜진 data
//1,2,3만 상세 페이지 이동 가능 합니다.
export const commuDetail = [
  {
    id: 1,
    title: '박효정씨는 아침 요청입니다.',
    content: '매일 아침마다 효정씨는 모두에게 아침 인사를 해줍니다. 아주 성실한 친구죠.',
    division: 'RECRUITMENT',
    view: 208,
    name: 'phy',
    created_at: '2023-06-21T17:34:51.3395597',
    modifiedAt: '2023-06-21T17:34:51.3395597',
    memberId: 1,
    status: 'POST_ACTIVE',
    comments: [
      {
        id: 1,
        content: '울랄랄 숑숑숑 댓글',
        memberId: 1,
        name: 'phj',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        id: 2,
        content: '댓글2',
        memberId: 2,
        name: 'wjw',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
    ],
  },
  {
    id: 2,
    //유저 프로필
    title: '위정연씨는 칭찬 스티커를 줍니다.',
    content: '잘 하는 사람만 정연씨의 칭찬 스티커를 받을 수 있죠.',
    division: 'COOPERATION',
    view: 200, //추가
    name: 'wjw',
    created_at: '2023-06-21T17:34:51.3395597',
    modifiedAt: '2023-06-21T17:34:51.3395597',
    memberId: 1,
    status: 'POST_ACTIVE',
    comments: [
      {
        id: 1,
        //유저 프로필
        content: '울랄랄 숑숑숑 댓글',
        memberId: 1,
        name: 'phj',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        id: 2,
        //유저 프로필
        content: '댓글2',
        memberId: 2,
        name: 'wjw',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
      },
      {
        id: 3,
        //유저 프로필
        content: '댓글3',
        memberId: 3,
        name: 'kdh',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        comments_id: 4,
        //유저 프로필
        content: '댓글4',
        memberId: 1,
        name: 'phj',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
    ],
  },
  {
    id: 3,
    //유저 프로필
    title: '김다함씨는 열정맨입니다.',
    content: '다함씨는 조용히 다함',
    division: 'COOPERATION',
    view: 150, //추가
    name: 'kdh',
    created_at: '2023-06-21T17:34:51.3395597',
    modifiedAt: '2023-06-21T17:34:51.3395597',
    memberId: 1,
    status: 'POST_ACTIVE',
    comments: [
      {
        id: 1,
        //유저 프로필
        content: '울랄랄 숑숑숑 댓글',
        memberId: 1,
        name: 'phj',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        id: 2,
        //유저 프로필
        content: '댓글2',
        memberId: 2,
        name: 'wjw',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        id: 3,
        //유저 프로필
        content: '댓글3',
        memberId: 3,
        name: 'kdh',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
      {
        id: 4,
        //유저 프로필
        content: '댓글4',
        memberId: 1,
        name: 'phj',
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      },
    ],
  },
];

//로그인 더미 데이터
export interface UserLogin {
  memberId: number;
  memberRole: string;
  name: string;
  email: string;
}

export const usersInLogin: UserLogin[] = [];
