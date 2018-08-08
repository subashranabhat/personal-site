import React, { Component } from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import {TempNav} from "./navbar";
import {Home} from './Home.js';
import {About} from "./About";
import {Experience} from "./Experience";
import {Skill} from "./Skill";

export class Main extends Component {
  render() {
    return (
      <div id="frontPage">
        <div className="row">
          <TempNav/>
        </div>
        <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/experience" component={Experience} />
      </div>
    );
  }
}
