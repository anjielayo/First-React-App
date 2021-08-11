/* import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const Home=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="offset-2 col-md-8">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
            />
            <TwitterTweetEmbed
            tweetId={'933354946111705097'}
            />
            <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
            <TwitterMentionButton
            screenName={'saurabhnemade'}
            />
            <TwitterHashtagButton
                tag={'cybersecurity'}
            />
            <TwitterFollowButton
                screenName={'saurabhnemade'}
            />
            <TwitterMomentShare
                momentId={'650667182356082688'}
            />
            <TwitterDMButton
                id={1364031673}
            />
            <TwitterVideoEmbed
                id={'560070183650213889'}
            />
            <TwitterOnAirButton
                id={'560070183650213889'}
            />
            {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/img1.jpg" className="d-block w-100"   alt="..." height="559px"  />
                            <div className="carousel-caption">
                                <h3>My First Image</h3>
                                <p>Welcome to our site!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/img2.jpg" className="d-block w-100" alt="..." height="559px" />
                            <div className="carousel-caption">
                                <h3>My Second Image</h3>
                                <p>We're glad to have you here!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/img3.jpg" className="d-block w-100"  alt="..." height="559px" />
                            <div className="carousel-caption">
                                <h3>My Third Image</h3>
                                <p>Check out what we have to offer...</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
                </div>
                </div>
        </div>
        );
}*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createPosts } from './actions/postaction';

class Home extends Component{
    state = {};
    componentDidMount(){
        this.props.createPosts();
    }

    render(){
        console.log("Props",this.props);
        const postLink=this.props.data.length?(
            this.props.data.slice(0,10).map(post=>{
                return(
                    <div className="card m-3" key={post.id}>
                        <div className="card-body">
                            <Link to={"/"+post.id}>
                                <h3 className="card-title text-center">{post.title}</h3>
                            </Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                );
            })
        ):(
            <div className="text-center">No post yet.</div>);
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-2 col-md-8">
                        <h4 className="text-center">Home</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo quam ratione natus quod cupiditate eveniet nam qui aperiam, laboriosam, quo unde eum pariatur sit beatae. Laudantium asperiores eius sed!</p>
                        {postLink}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({data={}})=>({
    data:data
});
export default connect(mapStateToProps,{createPosts})(Home); 