import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import HelloWorld from './components/helloworld'; 
//import App from './App';
//import NewCounter from './components/newcounter';
import reportWebVitals from './reportWebVitals';
//import Feed from './components/feed';
//import Instagram from './components/feeds/Instafeeds';
//import Feeds from './components/twitterfeeds/feeds';
//import AltFeed from './components/twitterfeeds/altfeeds';
//import Counters from './components/counters';
//import Navbar from './components/navbar';
import Fidma from './components/fidma/fidma';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/js/all.js';
//import Combo from './components/combo';
//import EasyCombo from './components/easycombo';
import {Provider} from 'react-redux'; //provides the store to your React application
import store from './components/fidma/store/poststore';
/*import {createStore,applyMiddleware} from 'redux'; //importing the function to create the store from redux
import thunk from 'redux-thunk'; //thunk is the middleware and prevents the reducer from picking up an empty payload


const iniState={
  posts:[]
} // our state

const action={type:'CREATE_POST',payload:[]}

const rootReducer=(state=iniState,action)=>{
return state;
}//reducer that accepts state and action as arguments

const store = createStore(rootReducer,applyMiddleware(thunk));//creating the store function 

store.dispatch(action)//reducer picks up action and dispatches it to store */

ReactDOM.render(
  <React.StrictMode>
   {/*  <Provider store={store}>
      <Fidma/>
    </Provider>{/*Javascript XML*/}
    {/*Wrap your parent component with Provider to make the store available to it. Provider is now the new parent component*/}
  <Provider store={store}>
    <Fidma/>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root') /*loads everything inside a div with an id of root which is contained in index.html*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
