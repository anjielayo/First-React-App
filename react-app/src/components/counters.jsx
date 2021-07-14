import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state={
        counter:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    };

    handleDelete=(counterId)=>{
        console.log("This "+counterId+" has been clicked.")
        this.state.counter.filter(count => count.id!==counterId)
        this.setState({counter:counter})

    };

    render() { 
        return ( 
            <div>
                {this.state.counter.map(count=><Counter key={count.id} value={count.value} id={count.id} deleteThis={this.handleDelete}/>)}
            </div>
         );
    }
}

export default Counters;