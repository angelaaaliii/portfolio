import './FunBooks.css';
import books_pic from './imgs/books.png';

export default function FunBooks() {

  return (
    // <div id="case-study-item" onClick={handleClick}>

    <div id="books"> 
      <img id ="book-img" alt="3 most recent reads, titles include 
      Turtles All the Way Down by John Green, The House on Mango Street by Sandra Cisneros, and The Rose Code by Kate Quinn" 
      src={books_pic} ></img>

      <a id="title">Books</a>

      <div id ="case-study-item-blurb">
        <p>Some recent reads</p>
      </div>

    </div>

  );
}
