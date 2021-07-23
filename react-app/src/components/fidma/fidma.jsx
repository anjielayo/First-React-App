import React, { Component } from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import News from './news';

class Fidma extends Component {
    state = {  }
/*     assets={
        style1: {
        fontColor:'red'},
        style2: {
            fontColor:'black'
        }  
    }; */
    render() { 
        return ( 
            <BrowserRouter>
                <React.Fragment>
                    <Navbar/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/news' component={News}/>
                </React.Fragment>
            </BrowserRouter>

         );
    }
}
 
export default Fidma;