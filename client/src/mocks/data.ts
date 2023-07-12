/* 2023-07-07 Portfolio Dtail Page Data - 김다함 */
export const portfolios = [
  {
    portfolio_id: 1,
    member_id: 4,
    name: '홍길동',
    picture: 'https://lh3.google.com/u/0/ogw/AGvuzYbCDcprvYxmksNeswTW8vXMfMcfc9B8PbN4Lyvc=s64-c-mo',
    title: '테스트용 포트폴리오입니다.',
    content: '<p dir="auto">안녕하세요! 클로저의 효용성에 의문이 들어 질문 드립니다!</p>\n<p dir="auto">클로저를 사용하는 정답코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n\n        var toggle = (function () {\n            var isShow = false;\n            // TODO: ① 클로저를 반환하는 함수를 작성하세요.\n            return function () {\n                // TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.\n                box.style.display = isShow ? \'block\' : \'none\';\n                isShow = !isShow;\n            };\n        })();\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-k">var</span> <span class="pl-s1">toggle</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n            <span class="pl-c">// TODO: ① 클로저를 반환하는 함수를 작성하세요.</span>\n            <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n                <span class="pl-c">// TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.</span>\n                <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n                <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span>\n            <span class="pl-kos">}</span><span class="pl-kos">;</span>\n        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-s1">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">전역 변수를 통해 상태를 관리하는 코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n        var isShow = false;\n        var toggle = function () {\n            box.style.display = isShow ? \'block\' : \'none\';\n            isShow = !isShow; // 전역 변수에 적용\n        };\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-en">toggle</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n            <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span> <span class="pl-c">// 전역 변수에 적용</span>\n        <span class="pl-kos">}</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-en">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">아래처럼 isShow를 전역변수로 선언하고, 그 상태를 토대로 스타일을 적용해주어도 똑같이 동작하는데, 굳이 클로저를 활용하는 이유가 궁금합니다.</p>\n<p dir="auto">이렇게 토글버튼 등에서 클로저를 활용하는 경우는 나중에 코드가 방대해졌을 때, 동작과 상태가 한번에 묶여있는 형태가 유지보수하기 용이해서 활용하는 것인가요? 혹은 다른이유가 있는지 궁금합니다.</p>\n<p dir="auto">감사합니다.</p>',
    explain: '이건 테스트용 포트폴리오 요약문입니다. 최대 길이는 300자~ 300자 안에 설명하는 거 너무 충분하지요~',
    created_at: '2020-20-20',
    view: 30,
    likes: 20,
    tags: ['javascript', 'react', '집', '잠', '영화', '로또', '백수']
  },
]


/*2023-07-10 Mypage User Information - 위정연 */
export interface UserData {
  name: string;
  job: string;
  career: string;
  award: string;
}

export const userData: UserData = {
  name: 'unknown',
  job: 'What is your job?',
  career: 'Career 1',
  award: 'Awards 1',
};


//혜진 data
import { CommuProps } from "@/types"

export const commu: CommuProps[] = [
  {
    board_id: 1,
    title: "박효정씨는 아침 요청입니다.",
    content: "매일 아침마다 효정씨는 모두에게 아침 인사를 해줍니다. 아주 성실한 친구죠.",
    view: 208,
    division: "recruitment",
    name: "phy",
    created_at: "2023-06-21T17:34:51.3395597",
    modifiedAt: "2023-06-21T17:34:51.3395597",
    member_id: 1,
    status: true
  },
  {
    board_id: 2,
    title: "위정연씨는 칭찬 스티커를 줍니다.",
    content: "잘 하는 사람만 정연씨의 칭찬 스티커를 받을 수 있죠.",
    view: 200,
    division: "recruitment",
    name: "yjy",
    created_at: "2023-05-21T17:34:51.3395597",
    modifiedAt: "2023-05-21T17:34:51.3395597",
    member_id: 2,
    status: true
  },
  {
    board_id: 3,
    title: "김다함씨는 열정맨입니다.",
    content: "다함씨는 조용히 다함",
    view: 150,
    division: "recruitment",
    name: "kdh",
    created_at: "2023-04-21T17:34:51.3395597",
    modifiedAt: "2023-04-21T17:34:51.3395597",
    member_id: 3,
    status: true
  }

];

export const commuDetail = [
  {
    board_id: 1,
    title: "박효정씨는 아침 요청입니다.",
    content: "매일 아침마다 효정씨는 모두에게 아침 인사를 해줍니다. 아주 성실한 친구죠.",
    division: "recruitment",
    name: "phy",
    created_at: "2023-06-21T17:34:51.3395597",
    modifiedAt: "2023-06-21T17:34:51.3395597",
    member_id: 1,
    status: true,
    comment: [
      {
        comments_id: 1,
        content: '울랄랄 숑숑숑 댓글',
        member_id: 1,
        name:'phj',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 2,
        content: '댓글2',
        member_id: 2,
        name:'wjw',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      }
    ]
    
  },
  {
    board_id: 2,
    title: "위정연씨는 칭찬 스티커를 줍니다.",
    content: "잘 하는 사람만 정연씨의 칭찬 스티커를 받을 수 있죠.",
    division: "recruitment",
    name: "wjw",
    created_at: "2023-06-21T17:34:51.3395597",
    modifiedAt: "2023-06-21T17:34:51.3395597",
    member_id: 1,
    status: true,
    comment: [
      {
        comments_id: 1,
        content: '울랄랄 숑숑숑 댓글',
        member_id: 1,
        name:'phj',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 2,
        content: '댓글2',
        member_id: 2,
        name:'wjw',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 3,
        content: '댓글3',
        member_id: 3,
        name:'kdh',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 4,
        content: '댓글4',
        member_id: 1,
        name:'phj',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      }
    ]
    
  }, 
  {
    board_id: 3,
    title: "김다함씨는 열정맨입니다.",
    content: "다함씨는 조용히 다함",
    division: "recruitment",
    name: "kdh",
    created_at: "2023-06-21T17:34:51.3395597",
    modifiedAt: "2023-06-21T17:34:51.3395597",
    member_id: 1,
    status: true,
    comment: [
      {
        comments_id: 1,
        content: '울랄랄 숑숑숑 댓글',
        member_id: 1,
        name:'phj',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 2,
        content: '댓글2',
        member_id: 2,
        name:'wjw',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 3,
        content: '댓글3',
        member_id: 3,
        name:'kdh',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      },{
        comments_id: 4,
        content: '댓글4',
        member_id: 1,
        name:'phj',
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597"
      }
    ]
    
  }
];
