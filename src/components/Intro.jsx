import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>Raghavendra Poojari</span><br />Competitive Programmer,<br />Web-developer, <br/>Data Science enthusiast.</p>
        <a href="#contact">Contact me</a>
      </div>
      <div>
        <img src="/img/me.png" alt=""/>
      </div>
    </section>
  );
}