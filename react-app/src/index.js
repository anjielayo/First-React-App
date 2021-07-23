import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import HelloWorld from './components/helloworld'; 
//import App from './App';
//import NewCounter from './components/newcounter';
import reportWebVitals from './reportWebVitals';
//import Counter from './components/counter';
//import Navbar from './components/navbar';
import Fidma from './components/fidma/fidma';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/js/all.js';
//import Combo from './components/combo';
//import EasyCombo from './components/easycombo';



ReactDOM.render(
  <React.StrictMode>
    <Fidma/> {/*Javascript XML*/}
  </React.StrictMode>,
  document.getElementById('root') /*loads everything inside a div with an id of root which is contained in index.html*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
