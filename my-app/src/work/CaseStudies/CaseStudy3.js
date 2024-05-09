import './CaseStudy3.css';
import web_critique from './imgs/freddy-hills-critique.png';
import sketches from './imgs/freddy-hills-sketches.jpeg';

export default function CaseStudy3({title, tags, thumbnail}) {
  return (
    <div id="case-study3">
      <div class="case-title">Freddy Hill Farms Website</div>
      <div class="blurb">
        <h2>Redesigning a responsive website for a local mini golf and dairy 
        farm business in the Philadelphia area.</h2>
      </div>

      <br></br>


      <div id="tags">Skills: HTML, CSS</div>

      <div id="role">Role: Frontend Developer</div>

      <br></br>

      <div id="context"> 
        <div class="section-header">Context</div>

        I took Freddy Hill Farms's website and indentified its key accessibility, efficiency, learnability, and memorability issues. 
        Then, working to fix these problems, I redesigned the website to address these points through 
        sketching, low-fidelity wireframes, a visual style guide, and high-fidelity wireframes. 
        The end goal of the business's website focuses on its desired metric: sales and customers.
      </div>

      <br></br>

      <div id="research-analysis">

        <div class="section-header">Research</div>

        <p>
          To start, I began by analyzing the current website's features.
          From this, I guaged what features were effective and ineffective.
          <ul id="bullets">
            <li>Learnability problems displayed in green</li>
            <li>Memorability problems displayed in pink</li>
            <li>Efficiency problems displayed in blue</li>
            <li>Accessibility problems displayed in red</li>
          </ul>
        </p>

        <img src={web_critique}></img>

        <p>
          After analyzing the current site layout, it was clear 
          that there were a lot of issues that stemmed from lack of organization 
          and visual hierarchy. 
        </p>

      </div>

      <br></br>

      <div id="process">
        <div class="section-header">Process</div>
        <p>
          To address the problems identified during the research phase, I knew 
          I wanted to focus on improving the organizational structure of the site by adding a 
          navigation bar to reduce redundancies, which caused a majority of the 
          efficiency and learnability issues.
        </p>
        <br></br>
        <p>
          So, I began by sketching 9 potential layouts of the website.
        </p>

        <img src={sketches}></img>
      </div>

      <div id="solution">
        <div class="section-header">Solution</div>
        <p>
          While brainstorming ideas for the redesigned website, I wanted to focus
          on improving the organizational structure of the site by adding a 
          navigation bar to reduce redundancies, causing a majority of the 
          efficiency and learnability issues.
        </p>
      </div>


      <div id="learnings">
      <div class="section-header">Learnings</div>

      </div>



    </div>
  );
}
