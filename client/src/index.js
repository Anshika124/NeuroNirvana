import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './Home.css';
import App from './App';
import Login from './Login';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Creativity from './Creativity';
import  Meditation from './Meditation';
import Suggestions from './Suggestions';
import Navigation from './Navigation';
import Main from './Main';
import Report from './Report';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

