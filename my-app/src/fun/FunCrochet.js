import './FunCrochet.css';
import crocheting_pic from './imgs/crocheting.png';
export default function FunCrochet() {

  return (
    // <div id="case-study-item" onClick={handleClick}>

    <div id="crochet"> 
      <img id ="crocheting-img" alt="Picture of Angela crocheting 3 birbs and pictures of a cactus birb, orange cat birb, oddish and pokeball birbs, and a graduation birb" 
      src={crocheting_pic}></img>

      <a id="title">Crocheting</a>

      <div id ="case-study-item-blurb">
        <p>Things I've crocheted recently</p>
      </div>

    </div>

  );
}
