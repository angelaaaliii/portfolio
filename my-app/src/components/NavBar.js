import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div id="nav-bar">
      <a className="nav-link" href="/#about">About</a>
      <a className="nav-link" href="/#work">Work</a>
      <a className="nav-link" href="/#fun">Fun</a>
      {/* <a className="nav-link" href="#resume">Resume</a> */}
    </div>
  );
}
