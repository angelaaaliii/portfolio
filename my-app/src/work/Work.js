import './Work.css';
import About from '../about/About';
import App from '../App';
import CaseStudyItem from './CaseStudyItem';
import CaseStudyImg1 from './imgs/responsive-redesign-thumbnail.png';
import warp from './imgs/warp-thumbnail.png'
import maps from './imgs/maps-thumbnail.png';


export default function Work() {
  return (
    <div id="work">
      <h1 id ="work-title">My Projects</h1>

      <div id = "case-studies">

          <CaseStudyItem
            title = "Maps Bucket List"
            blurb = "Web App Development"
            tags = "MongoDB, Express, React, Node"
            thumbnail = {maps}
            link = "/maps"
          ></CaseStudyItem>

          <CaseStudyItem
            title = "Warp Community Design"
            blurb = "Frontend Design"
            tags = "Figma"
            thumbnail = {warp}
            link = "/iterative-design"
          ></CaseStudyItem>

          <CaseStudyItem
            title = "Responsive Redesign"
            blurb = "Website Design"
            tags = "HTML, CSS"
            thumbnail = {CaseStudyImg1}
            link = "/website-design"
          ></CaseStudyItem>

      </div>

    </div>
  );
}
