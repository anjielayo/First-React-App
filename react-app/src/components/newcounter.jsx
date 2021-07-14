/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class NewCounter extends Component {
    state={
        count:0,
        tabs:["Home","About Us","Contact Us","FAQ","News"],
        things:["Home","About","Portfolio","Services","Contact"],
        thingsicons:["home", "address-card", "palette", "wrench", "envelope"],
        makeactive:["active","","","",""]
    }

    styles={
        fontSize:15,
        fontWeight:"bold"
    }

    formatCount = () => {
        const count = this.state.count;
        return count === 0 ? "Zero" : count;
    }

    //Adds Font-Awesome icons to the second nav bar
    fontClass=(x)=>{
        const classes = ["fas"];
        classes.push("fa-" + this.state.thingsicons[x]);
        return classes.join(" ");
    }

    //Adds classes to the first nav bar and makes home active
    activeClass=(y)=>{
        const add=["nav-item nav-link"];
        add.push(this.state.makeactive[y]);
        return add.join(" ");
    }

    //The First Navigation Bar
    renderTags=()=>{
        //let navlink="nav-item nav-link";
        return (
        <nav className="nav nav-tabs">
            {this.state.tabs.map((tab,i)=><a href="#" key={tab} className={this.activeClass(i)}>{tab}</a>)}
        </nav>

        );
    }

    //The Second Navigation Bar
    anjieNav=()=>{
        let navlink="nav-item nav-link";

        return (
        <div>
            <nav className="nav nav-tabs">{this.state.things.map((thing, i) => 
                <a href="/" key={thing} className="nav-item nav-link mr-2">
                <i className={this.fontClass(i)}></i> {thing}
                </a>)}
            </nav>

        </div> 
        );       
    }

/*     changeClass=()=>{
        let classes="nav-item nav-link mr-2";
        return classes
    } */ 

/*     modify=()=>{
        let first=document.getElementsByClassName('nav-item nav-link').item(0);
    } */

    //The Slideshow
    myCarousel=()=>{
        return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                        <li data-target="#carouselExampleFade" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="ny.jpg" className="d-block w-100"   alt="..."/>
                            <div className="carousel-caption">
                                <h3>My First Image</h3>
                                <p>This is my first image!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="la.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption">
                                <h3>My Second Image</h3>
                                <p>This is my second image!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="chicago.jpg" className="d-block w-100"  alt="..."/>
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

    }


    render() { 
        return (
            <div>
                <span style={this.styles} className={this.formatBadge()}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary m-2">Increment</button>

                {this.renderTags()}
                {this.anjieNav()}
                
                {this.myCarousel()}
                {/*{this.modify()}*/}
                
                
                
            
            </div>

            



            );
    }

    formatBadge=()=>{
        let classes="badge m-2 badge-";
        classes+=this.state.count===0?"warning":"danger";
        return classes;
    }
}
 
export default NewCounter;