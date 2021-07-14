import React, { Component } from 'react';
import Navbar from './navbar';
import Slideshow from './slideshow';

class Combo extends Component {
    state={
        navbar:[
            {id:1, value:0},
        ],
        slideshow:[
            {id:1,value:0},
        ]
        
    };
    render() { 
        return ( 
            <div>
                {this.state.navbar.map(count=><Navbar key={count.id} value={count.value}/>)}
                {this.state.slideshow.map(count=><Slideshow key={count.id} value={count.value}/>)}                
            </div>
         );
    }
}
 
export default Combo;