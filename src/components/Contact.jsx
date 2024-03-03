import React from "react";

const contactText = [
  {
      link: "",
      title: "KAKAO : ",
  },
  {
      link: "mailto:etoile929@naver.com",
      title: "mail : etoile929@naver.com",
  },
];


const Contact = () => {
  return (
    <section id="contact">
        <div className="contact__inner">
            <h2 className="contact__title">Contact</h2>
            <div className="contact__lines" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="contact__text">
                <div className="text">
                    {contactText.map((contact, key) => (
                          <div key={key}>
                              <a 
                                  href={contact.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                              >
                                  {contact.title}
                              </a>
                                  {/* noopener noneferrer는 데이터 유출을 방지하는 것  */}
                            </div>
                    ))}
                    
                   
                </div>
            </div>
            <div className="contact__lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    </section>
  );
};

export default Contact;