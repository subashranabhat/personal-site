import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export class TempNav extends Component {

  render() {
    return(
      <div className="container" id="defaultNav">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skill">Skill</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
