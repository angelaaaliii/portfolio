import './About.css';
import newport_pic from './/imgs/angela-newport.JPG';
import linkedin from './imgs/linkedin.jpeg';
import github from './imgs/github-logo.png';
import email from './imgs/email.png';

export default function About() {
  return (
    <div id="about">
      <div id="about-imgs">
        <img src={newport_pic} alt="Angela at The Breakers in Newport, RI" width="500" height="600"/>
      </div>

      <div id="about-info">
        <h1 id="hello">Hello! I'm Angela:</h1>
        <h2 id = "branding">backend software engineer</h2>
        <br></br>
        <p>
          I'm a current junior at Brown University, studying 
          Computer Science & Applied Mathematics with a focus on 
          software principles and systems.
        </p>
        <br></br>
        {/* <p>This summer I will be a software engineering intern at Microsoft, 
          working on Azure Cloud.
        </p> */}
        <p>Previously, I have been a software engineering intern at Raytheon 
          Technologies working within the aerospace survivability discipline group.
        </p>
        <br></br>
        <p>When I'm not at a computer, I'm either crocheting, reading, running, reading, or
          exploring national parks!</p>
          <br></br>
          <p>You can find me here: </p>

          <div id="socials">
            <a href="https://github.com/angelaaaliii">
            <img src={github} width="30px"></img></a>

            <a href="https://www.linkedin.com/in/angelaaa-liii/">
            <img src={linkedin} width="50px"></img></a>

            <a href= "mailto: angelali2021@gmail.com"> 
            <img src={email} width="50px"></img>
            </a>

          </div>
      </div>
    </div>
  );
}
