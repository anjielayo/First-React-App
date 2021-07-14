import React, { Component } from 'react';

class Slideshow extends Component {
    state = {

    };
    myCarousel=()=>{
        console.log('navbar props',this.props)
        return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={this.props.imageUrls.image1} className="d-block w-100"   alt="..." height="500px"/>
                            <div className="carousel-caption">
                                <h3>My First Image</h3>
                                <p>This is my first image!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={this.props.imageUrls.image2} className="d-block w-100" alt="..." height="500px"/>
                            <div className="carousel-caption">
                                <h3>My Second Image</h3>
                                <p>This is my second image!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={this.props.imageUrls.image3} className="d-block w-100"  alt="..." height="500px"/>
                            <div className="carousel-caption">
                                <h3>My Third Image</h3>
                                <p>This is my third image!</p>
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
                </div>);

    };
    render() { 
        return ( 
            <div>
            {this.myCarousel()}
            </div>
         );
    }
}
 
export default Slideshow;