import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = { 
        post:null
     }
     componentDidMount(){
         const id=this.props.match.params.post_id;
         axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res=>{
             this.setState({post:res.data})
         })
     }
    render() { 
        const post=this.state.post?
        (<div className="row">
            <div className="offset-4 col-md-6">
                <h4 className="text-center">{this.state.post.title}</h4>
                <p className="text-left">{this.state.post.body}</p>
            </div>
        </div>):(<div className="text-center">Loading post...</div>)

        return(
            <div className="container">{post}</div>
        )
    }
}
 
export default Posts;