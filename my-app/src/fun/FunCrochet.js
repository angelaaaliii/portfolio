import './FunCrochet.css';
import crocheting_pic from './imgs/crocheting.png';
export default function FunCrochet() {

  return (
    // <div id="case-study-item" onClick={handleClick}>

    <div id="crochet"> 
      <img id ="crocheting-img" src={crocheting_pic}></img>

      <a id="title">Crocheting</a>

      <div id ="case-study-item-blurb">
        <p>Things I've crocheted recently</p>
      </div>

    </div>

  );
}
