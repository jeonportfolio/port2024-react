import React from "react"

import { skillText } from "../constants";

const Skill = () => {
  return (
        <section id="skill">
        <div className="skill__inner">
            <h2 className="skill__title">전선욱 <em>WHO AM I?</em></h2>
            <div className="skill__desc">
                 {skillText.map((skill, key) => (
                     <div key={key}>
                          <span>{key+1}</span> 
                          {/* 0부터 나오기 때문에 +1을 해준것 */}
                          <h3>{skill.title}</h3>
                          <p >{skill.desc}</p>
                      </div>
                 ))}
                        <div>
                            <span>{2}</span> 
                            <h3>학력 및 자격사항</h3><br/>
                            <p > ▶한국공학대학교(IT경영학과)(2019.03 ~ 2025.02(졸업예정(졸업조건 충족)))<br/><br/>
                                 ▶머니스테이션(인턴과정(실습 및 파트) 2024.01.02 ~ 진행)(마케팅부서) <br/><br/>
                                 ▶웹디자인 기능사<br/><br/>
                                 ▶OPIC IH등급<br/><br/>
                                 ▶SQLD<br/><br/>
                                 ▶컴퓨터활용능력2급<br/><br/>
                                 ▶교내 공모전 -팀 프로젝트 APP 기획- 우수상<br/><br/>
                                 ▶운전면허 보통 2종 <br/><br/>
                                 ▶바리스타 2급 <br/><br/>
                            </p>
                        </div>

                        <div>
                            <span>{3}</span> 
                            <h3>프로젝트 주요스택 </h3> <a className="go" href="https://github.com/jeonportfolio" target="blank">깃허브 바로가기</a><br/><br/><br/>
                           
                            <p > <h4 >★ HTML/CSS/JAVA SCRIPT/GSAP</h4><br/>
                                  → 웹디자인 기능사 사이트(FIGMA 디자인 & JQUERY & JS변환)<br/>
                                  → 블로그 소개 사이트(FIGMA 디자인 & 유튜브 API 연동 & JS 애니메이션)<br/>
                                  → 인턴/ 게임 소개 페이지(GSAP애니메이션) <br/>
                                  → 게임 3종 (javascript)<br/>
                                  → 영화 정보 검색 사이트(OMDb API & chatgpt api & javascript & typescript)<br/><br/>
                                  → 사회적 약자 대중교통 시스템  ((서버=python & 공공데이터포털 & 카카오 맵 API))<br/><br/>
                                  <a className="go" href="https://github.com/jeonportfolio/python_bus_project" target="blank">코드보기</a><br/><br/>
                                  <h4 >★REACT.JS</h4><br/>
                                  → 포트폴리오 사이트 (GSAP & (vue.js,next.js로 변환))<br/>
                                  → 유튜브 사이트 (Rapid Api & SCSS 반응형 & useParam,useState,useEffect 훅사용)<br/><br/>
                                  
                                  <h4>★NODE.JS</h4> <br/>
                                  → 실시간 채팅 (프론트(React.js & mongoDB & websocket사용))<br/><br/>
                                  <a className="go" href="https://github.com/jeonportfolio/CHATTING-APP-client-" target="blank">프론트 코드보기</a>   <a className="go" href="https://github.com/jeonportfolio/CHATTING-APP-client-" target="blank">백엔드 코드보기</a><br/><br/>
                                  → 할일앱 기록 API ((mongoDB & router를 활용한 API관리))<br/><br/>
                                  <a className="go" href="https://github.com/jeonportfolio/Node.js-api" target="blank">코드보기</a> 
                                 
                                 
                            </p>
                        </div>
             </div>   
         </div>
       </section>
    
      )
  }

export default Skill;