import React from 'react';

const Home=()=>{
    return(
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
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
        );
}
export default Home;