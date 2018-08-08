import React, { Component } from 'react';
import './style.css';
import Typist from 'react-typist';
import Tilt from 'react-tilt';
const languages = ['C#','SQL', 'ASP.NET', 'PHP', 'JavaScript', 'ReactJs', 'NodeJs'];

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container text-center">
            <Tilt className="Tilt" options={{ max: 25 }} >
              <img id="profilePic" alt="Profile" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1521580_607937979253477_1632119205_n.jpg?_nc_cat=0&oh=49fe9a53214239e307e0bda2f4485df3&oe=5BCF5D63" />
            </Tilt>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="container text-center">
            <h2 className="animated slideInUp">Hello!</h2>
            <Typist>
              <Typist.Delay ms={1250} />
              <h3>I am Subash.</h3>
              <Typist.Delay ms={1250} />
              <h3> FullStack/Software Developer </h3>
              <button type="button" id="resume-btn" className="btn btn-outline-dark btn-lg"><i className="fas fa-download"></i>
                <Typist.Delay ms={1250} />
                &nbsp;Download Resume</button>
              <Typist.Delay ms={1250} />
              {languages.map(lang =>
                <div key={lang}>
                  <h3>{lang}</h3>
                  < Typist.Backspace count={lang.length} delay={1000} />
                </div>
              )}
            </Typist>
          </div>
        </div>
      </div>
      );
    }
  }
