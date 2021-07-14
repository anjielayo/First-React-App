/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        tabs:["Home","About","Contact","FAQ"]
    };

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
                <a href="#" key={tab} className={this.activeNav()}>
                    {tab}
                </a>
                ))}

            </nav>
            );
    }
    formatBadge=()=>{
        let classes="badge m-2 badge-";
        classes+=this.state.count===0?"warning":"danger";
        return classes;
    }

   activeNav=()=>{
       const tabs=this.state.tabs;
       for (let tab of tabs){
           var navlink=
           tab==="Home"?"nav-item nav-link active":"nav-item nav-link";
        console.log(tab);
       }
       return navlink;
    };

    render() {
        console.log('props',this.props.value)
        return (
            <div>
                <span style={this.styles} className={this.formatBadge()}>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
                {/* {this.renderTags()} */}
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.deleteThis(this.props.id)}>Delete</button>
            </div>
        );
    }

}

export default Counter;