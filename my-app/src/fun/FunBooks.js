import './FunBooks.css';
import books_pic from './imgs/books.png';

export default function FunBooks() {

  return (
    // <div id="case-study-item" onClick={handleClick}>

    <div id="books"> 
      <img id ="book-img" src={books_pic} ></img>

      <a id="title">Books</a>

      <div id ="case-study-item-blurb">
        <p>Some recent reads</p>
      </div>

    </div>

  );
}
