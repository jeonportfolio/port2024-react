import port01 from "../assets/img/port01.jpg"
import port02 from "../assets/img/port02.jpg"
import port03 from "../assets/img/port03.jpg"
import port04 from "../assets/img/port04.jpg"
import port05 from "../assets/img/port05.jpg"
import port06 from "../assets/img/port06.jpg"
import port07 from "../assets/img/port07.jpg"
import port08 from "../assets/img/port08.jpg"


export const headerNav = [
    {
        title: "intro",
        url:"#intro"
    },
    {
        title: "skill",
        url:"#skill"
    },
    {
        title: "site",
        url:"#site"
    },
    {
        title: "portfolio",
        url:"#port"
    },
    {
        title: "contact",
        url:"#contact"
    }
        //ul li a 를 배열화 시켜준 것이다.
]

export const introText = {
    title:"FRONTEND PORT",
    desc: ["사용기술스택 -> CLICK", "WELCOME"]
   
  }

  export const skillText = [
    {
      title: "도전을 멈추지 않는 프론트엔드를 꿈꾸는 '전선욱' 입니다.",
      desc: `자신의 부족한 점을 항상 되돌아보며 꾸준히 개발하는 것과 자신의 역할에 최선을 다하며 역경이 와도 목표를 향해 꾸준히 나아가는것을 중요시 생각합니다
      웹디자인 기능사를 통해 개발자의 꿈을 키워왔고  바리스타 자격증을 취득하여 카페에서 근무했으며 컴퓨터 활용능력과 마케팅 주식관련 지식으로 머니스테이션 인턴과정을 
      수행했습니다 이와 같이 결과물에 그치지 않고 발전시켜 나가는 것을 모토로 꾸준히 발전하는 프론트엔드가 되기 위해 노력하고 있습니다. `
    },
   

  ]


  export const siteText = [
   
    {
        text: ["Documenting", "My Project", "on the Blog&GITHUB"],
        title: "나의 프로젝트 깃허브 & 블로그에 기록하기",
        code: "https://github.com/jeonportfolio",
        view: "https://blog.naver.com/turtleweb",
        info: [ 
            "프로젝트 깃허브 & 블로그 기록하기",
        ],
    },
    {
        text: ["REACT.JS", "Wood Mode", "Portfolio Site"],
        title: "React.js 포트폴리오(첫번째 모드<나무 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-react",
        view: "/",
        info: [
            "REACT.js portfolio",
            "use stack : React.js, SCSS, gsap",
        ],
    },
    {
        text: ["NEXT.JS", "Dark Mode", "Portfolio Site"],
        title: "Next.js 포트폴리오(두번째 모드<무지개 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-next",
        view: "/",
        info: [
            "NEXT.js portfolio",
            "use stack : Next.js, SCSS, gsap",
        ],
    },
    {
        text: ["VUE.JS", "Rainbow Mode", "Portfolio Site"],
        title: "Vue.js 포트폴리오(세번째 모드<다크 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-vue",
        view: "/",
        info: [
            "VUE.js portfolio",
            "use stack : Vue.js, SCSS, gsap",
        ],
    },
   
  ];




export const portText = [
    {
        num: "01",
        title: "웹디자인기능사 사이트 (PC버젼)",
        desc: "피그마 & HTML & CSS를 웹디자인기능사 기술을 활용한 사이트입니다. 저의 웹디자인기능사 공부법을 공유하였습니다.",
        img: port01,
        code: "https://github.com/jeonportfolio/FIGMA-WEB",
        view: "https://jeonportfolio.github.io/FIGMA-WEB/figma%20portfolio.html",
        name: "웹디자인 기능사",
    },
    {
        num: "02",
        title: "나만의 유튜브 사이트(반응형)",
        desc: "REACT & RAPID API를 활용해 나만의 자기개발 관련 카테고리를 구성한 유튜브 사이트 입니다 검색과 영상재생이 가능합니다. ★모바일에서 메뉴 생성은 로고클릭!! ",
        img: port02,
        code: "https://react-myyoutube.netlify.app",
        view: "https://react-myyoutube.netlify.app",
        name: "나만의 youtube",
    },
    {
        num: "03",
        title: "블로그 소개 페이지(PC버젼)",
        desc: "HTML/CSS/JAVA SCRIPT를 사용하여 자격증/aws/공모전 등 활동 기록들을 소개하는 페이지입니다. ",
        img: port03,
        code: "https://github.com/jeonportfolio/game-intro",
        view: "https://turtleweb.netlify.app/",
        name: "블로그 소개",
    },
    {
        num: "04",
        title: "인턴과정 소개 (PC 버젼)",
        desc: "GSAP을 활용한 애니메이션을 추가하여 저의 인턴활동 과정을 소개하는 페이지입니다",
        img: port04,
        code: "https://github.com/jeonportfolio/GSAP-intern",
        view: "https://jeonportfolio.github.io/GSAP-intern/INTERN.html",
        name: "인턴과정 소개",
    },
    {
        num: "05",
        title: "게임 소개 페이지 (반응형)",
        desc: "GSAP을 활용해 javascript를 이용해 만든 3종 게임 소개 페이지 입니다.(새끼거북의 여행 & 지구를 지켜라 & 테트리스)",
        img: port05,
        code: "https://github.com/jeonportfolio/game-project",
        view: "https://gameintro.netlify.app",
        name: "GSAP게임소개",
    },
    {
        num: "06",
        title: "영화검색 사이트(반응형)",
        desc: "OMDb API를 활용해 store&router 개념을 적용하여 자바스크립트 및 타입스크립트로 변환한 사이트입니다",
        img: port06,
        code: "https://github.com/jeonportfolio/build-movie/tree/main",
        view: "https://moviebox-zeta.vercel.app/#/",
        name: "영화검색사이트",
    },
    {
        num: "07",
        title: "영화검색 사이트 & AI챗봇 추가(진행중)",
        desc: "OMDb API를 활용해 store&router 개념을 적용하여 자바스크립트 및 타입스크립트로 변환한 사이트입니다. chat gpt API 도입",
        img: port07,
        code: "https://github.com/jeonportfolio/find-movie-typescript",
        view: "https://find-movie-typescript.vercel.app/#/",
        name: "영화검색사이트",
    },
    {
        num: "08",
        title: "사회적약자 대중교통 예약시스템(진행중)",
        desc: "카카오 맵 & 공공데이터 포털API 사용 java script & jquery & python flask서버 활용",
        img: port08,
        code: "https://github.com/jeonportfolio/python_bus_project",
        view: "https://blog.naver.com/turtleweb/223634853469",
        name: "영화검색사이트",
    }
   
];


export const contactText = [
 
    {
        link: "mailto:etoile929@naver.com",
        title: "mail : etoile929@naver.com",
    },
  ];

  export const footerText = [
    {
        title: "github",
        desc: "깃헙",
        link: "https://github.com/jeonportfolio",
    },
    {
        title: "blog",
        desc: "블로그",
        link: "https://blog.naver.com/turtleweb",
    },
    {
        title: "Linked In",
        desc: "링크드인",
        link: "/",
    },
    
  ];