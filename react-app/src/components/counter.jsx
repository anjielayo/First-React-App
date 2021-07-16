/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCut } from '@fortawesome/free-solid-svg-icons';

class Counter extends Component {
    state = {
        count: this.props.value,
        tabs:["Home","About","Contact","FAQ"]
    };

    assets={
        images:{
            image1:"images/la.jpg",
            image2:"images/chicago.jpg",
            image3:"images/ny.jpg"
        },
        font:{
            font1:"Roboto",
            font2:"sans-serif",
            font3:"Verdana"
        },
        styles:{
            fontSize:12,
            fontWeight:'bold',
            fontColor:'whitesmoke'
            
        },
        imgstyle:{
            borderRadius:"50%",
            width:"100px",
            height:"100px",
            marginTop:"10px"
        }
    }

    formatCount=()=>{
        const count=this.state.count;
        return count===0?"Zero":count;
    };
    handleIncrement=()=>{
        this.setState({count:this.state.count + 1})
    };
    styles={
        fontSize:15,
        fontWeight:"bold"
        
    }
    renderTags=()=>{
        return(
            <nav className="nav nav-tabs">
                {this.state.tabs.map(tab=>(
                <a href="#" key={tab} className={this.activeNav(tab)}>
                    {tab}
                </a>
                ))}
            </nav>
            );
    };
    formatBadge=()=>{
        let classes="badge m-2 badge-";
        classes+=this.state.count===0?"warning":"success";
        return classes;
    };

/*MAKES HOME TAB ACTIVE*/
   activeNav=(navlink)=>{
    if (navlink==="Home"){
        return "nav-item nav-link active"}
    else{
        return "nav-item nav-link"}
    };

    render() {
        console.log('props',this.props.value)
        return (
            <div>
                <span style={this.styles} className={this.formatBadge()}>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} className="btn btn-sm btn-secondary m-2"><FontAwesomeIcon icon={faCoffee} className="mr-2"/>Increment</button>
                
                
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.deleteThis(this.props.id)}><FontAwesomeIcon icon={faCut} className="mr-2"/>Delete</button>
                <img style={this.assets.imgstyle} src={this.assets.images.image1} alt=""/>
                {this.renderTags()}
                
            </div>
        );
    }

}

export default Counter;