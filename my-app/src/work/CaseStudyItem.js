import './CaseStudyItem.css';
import { Link } from 'react-router-dom';

export default function CaseStudyItem({title, blurb, tags, thumbnail, link}) {
  return (
    <div id="case-study-item">
      <Link to={link}>
        <img id ="case-study-item-img" src={thumbnail}></img>

        <a id="title" href="url">{title}</a>

        <div id ="case-study-item-blurb">
          <p>{blurb}</p>
        </div>

        <div id = "case-study-item-tags">
          <p>{tags}</p>
        </div>
      </Link>
    </div>
  );
}
