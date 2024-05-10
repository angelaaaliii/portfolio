import './CaseStudyItem.css';
import { Link } from 'react-router-dom';

export default function CaseStudyItem({title, blurb, tags, thumbnail, link}) {
  return (
    <Link to={link}>
      <div id="case-study-item">

      
        <img id ="case-study-item-img" alt="thumbnail for case study depicting company or final product created"
        src={thumbnail}></img>

        <a id="case-study-title" href={link}>{title}</a>

        <div id ="case-study-item-blurb">
          <p>{blurb}</p>
        </div>

        <div id = "case-study-item-tags">
          <p>{tags}</p>
        </div>
      </div>
    </Link>


  );
}
