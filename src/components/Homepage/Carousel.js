import React, { Component } from 'react'
import './homepage.css'


export default class Carousel extends Component {
    render() {
        return (
            <div id="carousel-example-2" className="carousel slide carousel-fade d-none d-sm-block" data-ride="carousel">
                {/* <!--Slides--> */}
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <img className="d-block w-100" src="pic4.jpg" alt="First slide" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src="pic2.jpg" alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    {/* <!--/.Controls--> */}
                </div>
            </div>

        )
    }
}

