import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="container about pt-3">

                <div className="about-us">
                    <div className="about-img">
                        <img src="/" className="img-fluid" style={{ borderRadius: "16px" }} />
                    </div>
                    <span>
                        <h3 id="header" className="display-4 textsemibold pt-4 pb-5" style={{ marginLeft: "400px" }}>About the Project</h3>
                    </span>
                    <div className="about-txt d-flex align-content-center flex-wrap">
                        <h4 className="mb-4 textsemibold text-white">We are a Team .</h4>
                        <p className="text-white text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, explicabo minima. Explicabo autem molestiae accusamus cupiditate, perferendis quam aperiam, dolore placeat adipisci harum molestias quibusdam fugiat ipsam commodi, soluta tenetur?</p>
                        <form className="custom-input mt-3 mt-sm-4 mt-md-5" action="">
                            <button type="button" className="custom-button">Click to Learn More!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}