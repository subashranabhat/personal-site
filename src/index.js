import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import {Main} from './main';


const baseUrl = (document.getElementsByTagName('base')[0] || {}).href;
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Main />
  </BrowserRouter>,
  rootElement);
