import './About.css';
import newport_pic from './/imgs/angela-newport.JPG';

export default function About() {
  return (
    <div id="about">
      <div id="about-imgs">
        <img src={newport_pic} alt="Angela at The Breakers in Newport, RI" width="500" height="600"/>
      </div>

      <div id="about-info">
        <h1 id="hello">Hello! I'm Angela</h1>
        {/* <p>a software engineer focused on backend</p> */}
        <br></br>
        <p>
          I'm a current junior at Brown University, studying 
          Computer Science & Applied Mathematics with a focus on 
          software principles and systems.
        </p>
        <br></br>
        <p>This summer I will be a software engineering intern at Microsoft, 
          working on Azure Cloud.
        </p>
        <p>Previously, I have been a software engineering intern at Raytheon 
          Technologies working within the aerospace survivability discipline group.</p>
        <br></br>
        <p>When I'm not at a computer, I'm either running, reading, crocheting, 
          exploring national parks, or adding new restaurants to my Beli!</p>
          <br></br>
          <p>You can find me here: </p>
      </div>
    </div>
  );
}
