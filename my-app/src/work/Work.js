import './Work.css';
import About from '../about/About';
import App from '../App';
import CaseStudyItem from './CaseStudyItem';
import CaseStudyImg1 from './imgs/responsive-redesign-thumbnail.png';


export default function Work() {
  return (
    <div id="work">
      <h1 id ="work-title">My Projects</h1>

      <div id = "case-studies">

          <CaseStudyItem
            title = "Warp Community Design"
            blurb = "Frontend Design"
            tags = "Figma"
            thumbnail = {CaseStudyImg1}
            link = "/iterative-design"
          ></CaseStudyItem>

          <CaseStudyItem
            title = "Maps Bucket List"
            blurb = "Web App Development"
            tags = "MongoDB, Express, React, Node"
            thumbnail = {CaseStudyImg1}
            link = "/maps"
          ></CaseStudyItem>

          <CaseStudyItem
            title = "Freddy Hill Farms Website"
            blurb = "Website Design"
            tags = "HTML, CSS"
            thumbnail = {CaseStudyImg1}
            link = "/website-design"
          ></CaseStudyItem>

      </div>

    </div>
  );
}
