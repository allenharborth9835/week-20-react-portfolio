import React from "react";

//component to return about section
function About(){
  return (
    <section className="bio-info">
      <article id="main-bio" className="main">
        <br/>
        <img
          id="bio-image"
          src={require("../../assets/Allen.jpg").default}
          alt="Allen Harborth"
          height="300px"
        />
        <p>
          Hey, my name is Allen Harborth. I served 6 years in the United States Air Force, where I served 2 years at kadena AB in Okinawa Japan, and 3 years at Yokota AB in Fussa Japan. I still serve in the Air Force reserve part time through Lackland AB at San Antonio. Originally, I’m from Eastland Texas. I am currently taking a class for web development. I first began getting deeper into computers when I made my first computer for gaming. I then began teaching myself Python. Later, I was taught Java while going to college for computer science. Some of the other things I was taught in college were C++, SQL,software design methods and hardware architecture. I look forward to a career in web development and computer science.
        </p>       
      </article>
      <article className="skills">
        <h2>Skills and details</h2>
        <p>College in computer science.</p>
        <p>Positions of leadership and communication in small groups.</p>
        <p>Use of java, HTML, CSS, javascript, NODE.js python, SQL, mongoDB(NoSQL), React, and C.</p>
        <p>Attention to detail.</p>
        <p>Ability to follow orders.</p>
        <p>Able to work with a diverse team and perform task in a respectful and responsible way.</p>
        <p>Algorithmic development through functional logic.</p>
        <p>Use of pre programming practices.</p>
        <p>Critical thinking through stressful situations.</p>
      </article>
    </section>
  );
}

export default About; 