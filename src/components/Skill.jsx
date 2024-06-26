import React from "react"

import { skillText } from "../constants";

const Skill = () => {
  return (
        <section id="skill">
        <div className="skill__inner">
            <h2 className="skill__title">MY.INFO <em>나의 소개</em></h2>
            <div className="skill__desc">
                 {skillText.map((skill, key) => (
                     <div key={key}>
                          <span>{key+1}</span> 
                          {/* 0부터 나오기 때문에 +1을 해준것 */}
                          <h3>{skill.title}</h3>
                          <p>{skill.desc}</p>
                      </div>
                 ))}
             </div>   
         </div>
       </section>
    
      )
  }

export default Skill;