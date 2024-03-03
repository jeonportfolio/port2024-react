import React from "react";

const footerText = [
  {
      title: "youtube",
      desc: "유튜브",
      link: "/",
  },
  {
      title: "github",
      desc: "깃헙",
      link: "/",
  },
  {
      title: "blog",
      desc: "블로그",
      link: "/",
  },
  {
      title: "gsap",
      desc: "GSAP",
      link: "/",
  },
  {
      title: "react",
      desc: "리액트",
      link: "/",
  },
  {
      title: "vue",
      desc: "뷰",
      link: "/",
  },
  {
      title: "next",
      desc: "넥스트",
      link: "/",
  },
];

const Footer = () => {
  return (
      <footer id="footer" role="contentinfo">
          <div className="footer__inner">
              <div className="footer__text">
                  <span>webstoryboy</span>
                  <span>© webs</span>
              </div>
              <div className="footer__info">
                  <div className="left">
                      <div className="title">
                          <a href="/">sign up</a>
                      </div>
                      <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                  </div>
                  <div className="right">
                      <h3>social</h3>
                      <ul>
                          {footerText.map((footer, key) => (
                               <li key={key}>
                                  <a href={footer.link}>{footer.title}</a>
                                  <em>{footer.desc}</em>
                               </li>
                          ))}
                          
                      </ul>
                  </div>
              </div>
              <div className="footer__right">
                  © 2024 jeon<br />
                  이 사이트는 리액트를 이용하여 제작하였습니다.
              </div>
          </div>
      </footer>
  );
};


export default Footer;