import React from "react"

const skillText = [
  {
    title: "자기성찰과 개발",
    desc: "자신에겐 항상 관대해서는 안된다. 자신에게 관대하면 당연히 만족하며 살 것이고, 만족감만을 느끼며 자신의 부족함을 되돌아 보지 않게된다면 언젠간 기만과 교만 속에서 누군가에게 피해를 주며 자신의 개발에 대해 게을러지게 된다. 현재에 안주하지 않으며 자기성찰을 통한 반성과 자기개발은 성장의 원동력이라고 생각한다."
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다.운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다.  몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
  },
  {
    title: "나에게 정직하다.",
    desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
  }
]

const Skill = () => {
  return (
        <section id="skill">
        <div className="skill__inner">
            <h2 className="skill__title">Challenge <em>나의 도전</em></h2>
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

export default Skill