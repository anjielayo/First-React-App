import React, { Component } from 'react';
import Navbar from './navbar';
import Slideshow from './slideshow';

class EasyCombo extends Component {
    state={
        styles:{
            style1:{
                color:'red',
                fontWeight:'bolder'
            },
            style2:{
                color:'black',
                fontWeight:'bolder'
            }
        },
        imageUrls:{
        image1:'images/ny.jpg',
        image2:'images/la.jpg',
        image3:'images/chicago.jpg'
        }

        
    }
    render() { 
        
        return (
            <div>
                <Navbar styles={this.state.styles}/>
                <Slideshow styles={this.state.styles} imageUrls={this.state.imageUrls}/>
            </div>
          );
    }
}
 
export default EasyCombo;