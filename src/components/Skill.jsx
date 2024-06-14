import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/python.jpg" alt=""/><span>Python</span></div>
          <div className="skill-box"><img src="/img/cpp.png" alt=""/><span>C++</span></div>
          <div className="skill-box"><img src="/img/react.png" alt=""/><span>React</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MongoDB</span></div>
          <div className="skill-box"><img src="/img/matplot.png" alt=""/><span>Matplotlib</span></div>
          <div className="skill-box"><img src="/img/scikit.jpg" alt=""/><span>ScikitLearn</span></div>
          <div className="skill-box"><img src="/img/tf.png" alt=""/><span>Tensorflow</span></div>
        </div>
      </div>
    </section>
  );
}