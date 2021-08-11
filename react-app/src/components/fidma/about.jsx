/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import axios from 'axios';
import {Link,NavLink} from 'react-router-dom';
//import './style2.css';

class About extends Component{
    state={
        posts:[]
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        //console.log(res)
        this.setState({posts:res.data.slice(0,10)})})
    };

    render()  {
        const {posts}=this.state;
        const postList=posts.length?(
            posts.map(post=>{
                return(
                <div className="card m-3" key={post.id}>
                    <div className="card-body">
                        <Link to={"/"+post.id}>
                            <h3 className="card-title text-center">{post.title}</h3>
                        </Link>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>);
                })
                )
                :
                (<div className="text-center">No post yet.</div>);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="offset-2 col-md-8">
                    <h4 className="text-center">About</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nobis placeat mollitia minus exercitationem dolorum, excepturi laborum rerum quis ullam fugiat possimus incidunt eius aperiam eum iste facilis, impedit recusandae?</p>
                    {postList}
                </div>
            </div>
            
        </div>

    //FLIP CARD
     /* <div classNameName="container-fluid">
    <div id="wrapper2">
    <section className="panel_sec">
        <div className="panels flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                
                    <img src="images/img1.jpg" alt="" width="100%" height="100%"/>
                    <img src="images/wm1.png" alt="" width="80%" height="80%" style={{position:'relative', top:'-250px'}}/>

                </div>
                <div className="flip-card-back">
                    <img src="images/img2.jpg" alt="" width="100%" height="100%"/>
                    <img src="images/wm1.png" alt="" width="80%" height="80%" style={{position:'relative', top:'-250px'}}/>
                </div>
            </div>
        </div>
        <div className="panels flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="images/img3.jpg" alt="" width="100%" height="100%"/>
                    <img src="images/wm2.png" alt="" width="80%" height="80%" style={{position:'relative', top:'-250px'}}/>
                </div>
                <div className="flip-card-back">
                    <img src="images/img4.jpg" alt="" width="100%" height="100%"/>
                    <img src="images/wm2.png" alt="" width="80%" height="80%" style={{position:'relative', top:'-250px'}}/>
                </div>
    </div>
</div>
</section>
        </div>
        </div>  */
        );
}
}
export default About;
