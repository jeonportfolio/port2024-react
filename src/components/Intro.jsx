import React from "react";

import about from "../assets/img/about.jpg";
import stack1 from "../assets/img/about.jpg";
import stack2 from "../assets/img/about.jpg";


import { introText } from "../constants"

const Intro = () => {
  return (
    <section id="intro">
        <div className="intro__inner">
            <h1 className="intro__title">
                {introText.title}
            </h1>
            <div className="intro__lines" aria-hidden="true">  
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro__text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                </div>
                <div className="img">
                    <img src={about} alt="어바웃" />
                </div>
                <div className="mini__image">
                    <div className="img1">
                        <img src={stack1} alt="어바웃" />
                    </div>
                
                    <div className="img2">
                        <img src={stack2} alt="어바웃" />
                    </div>
                    <div className="img3">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div className="mini__image2">
                    <div className="img4">
                        <img src={stack1} alt="어바웃" />
                    </div>
                
                    <div className="img5">
                        <img src={stack2} alt="어바웃" />
                    </div>
                    <div className="img6">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>

            </div>
            <div className="intro__lines bottom" aria-hidden="true">
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

  )
}

export default Intro;