import './CaseStudyItem.css';
import { Link, useNavigate } from 'react-router-dom';

export default function CaseStudyItem({title, blurb, tags, thumbnail, link}) {
  const navigate = useNavigate();
  const handleClick = () => {
    // window.location.href = `/${link}`;
    console.log(link);
    window.location.href = link;
  }
  
  return (
    // <div id="case-study-item" onClick={handleClick}>
    <Link to={link}>

    <div id="case-study-item"> 
      <img id ="case-study-item-img" src={thumbnail}></img>

      <a id="title" href="url">{title}</a>

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
