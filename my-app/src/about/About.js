import './About.css';
import newport_pic from './/imgs/angela-newport.JPG';
import linkedin from './imgs/linkedin.jpeg';
import github from './imgs/github-logo.png';
import email from './imgs/email.png';

export default function About() {
  return (
    <div id="about">
      <div id="about-imgs">
        <img id="about-pic" src={newport_pic} alt="Angela at The Breakers in Newport, RI" width="500" height="600"/>
        
      </div>

      <div id="about-info">
        <div id="color-box">
          <h1 id="hello">Hello! I'm Angela:</h1>
          <h2 id = "branding">backend software engineer</h2>
        </div>
        <br></br>
        <p>
          I'm a current junior at <a id="link" href="https://www.brown.edu/">Brown University</a>, 
          studying <a id="link" href="https://brown.edu/undergraduate-programs/applied-mathematics-computer-science-scb">Computer Science & Applied Mathematics</a> with 
          a focus on software principles and systems.
        </p>
        <br></br>
        {/* <p>This summer I will be a software engineering intern at Microsoft, 
          working on Azure Cloud.
        </p> */}
        <p>Previously, I have been a software engineering intern at <a id="link" href="https://www.rtx.com/">Raytheon 
          Technologies</a> working within the aerospace survivability discipline group.
        </p>
        <br></br>
        <p>When I'm not at a computer, I'm either crocheting, reading, running, reading, or
          exploring national parks!</p>
          <br></br>
          <p>You can find me here: </p>

          <div id="socials">
            <a href="https://github.com/angelaaaliii">
            <img src={github} alt="GitHub logo that links to Angela's GitHub profile" width="30px"></img></a>

            <a href="https://www.linkedin.com/in/angelaaa-liii/">
            <img src={linkedin} alt="LinkedIn logo that links to Angela's LinkedIn profile" width="50px"></img></a>

            <a href= "mailto: angelali2021@gmail.com"> 
            <img src={email} alt="Email icon that links to Angela's email address" width="50px"></img>
            </a>

          </div>
      </div>
    </div>
  );
}
