import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Typist from 'react-typist';
import {TempNav} from "./navbar";
import Tilt from 'react-tilt';

const languages = ['C#','SQL', 'ASP.NET', 'PHP', 'JavaScript', 'ReactJs', 'NodeJs'];

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <TempNav/>
        </div>

        <div className="row">
          <div className="container text-center">
            <Tilt className="Tilt" options={{ max : 25 }} >
            <img id="profilePic" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1521580_607937979253477_1632119205_n.jpg?_nc_cat=0&oh=49fe9a53214239e307e0bda2f4485df3&oe=5BCF5D63"/>
            </Tilt>
          </div>
        </div>

        <div className="row">
          <div className="container text-center">
            <h2 className="animated slideInLeft">Hi!</h2>
            <Typist>
              <Typist.Delay ms={1250}/>
              <h3>I am Subash.</h3>
              <Typist.Delay ms={800}/>
              <h3> FullStack/Software Developer </h3>
              <button type="button" id="resume-btn" class="btn btn-outline-dark btn-lg"><i class="fas fa-download"></i>

                 &nbsp;Download Resume</button>
              <Typist.Delay ms={800}/>

              {languages.map(lang =>
                <div>
                  <h3>{lang}</h3>
                  < Typist.Backspace count={lang.length} delay={1000}/>
                </div>
              )}
            </Typist>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
