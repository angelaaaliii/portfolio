import './CaseStudy3.css';
import web_critique from './imgs/freddy-hills-critique.png';
import sketches from './imgs/freddy-hills-sketches.jpeg';

export default function CaseStudy3({title, tags, thumbnail}) {
  return (
    <div id="case-study3">
      <div id="title">{title}</div>
      <div>
        Redesigning a responsive website for a local mini golf and dairy 
        farm business in the Philadelphia area.
      </div>
      
      <div id="tags">{tags}</div>

      <div id="role">Frontend Developer</div>

      <div id="context"> 
        I took a Freddy Hill Farms's website and indentified its key accessibility, efficiency, learnability, and memorability issues. 
        Then, working to fix these problems, I redesigned the website to address these points through 
        sketching, low-fidelity wireframes, a visual style guide, and high-fidelity wireframes. 
        The end goal of the business's website focuses on its desired metric: sales and customers.
      </div>

      <div id="research-analysis">

        <div id="subsection-header">Website Critique</div>

        <p>
          To start, I began by analyzing the current website's features.
          From this, I guaged what features were effective and ineffective.
        </p>

        <img src={web_critique}></img>

      </div>

      <div id="design-solution">
        <p>
          While brainstorming ideas for the redesigned website, I wanted to focus
          on improving the organizational structure of the site by adding a 
          navigation bar to reduce redundancies, causing a majority of the 
          efficiency and learnability issues.
        </p>

        <img src={sketches}></img>
      </div>


      <div id="conclusion">

      </div>



    </div>
  );
}
