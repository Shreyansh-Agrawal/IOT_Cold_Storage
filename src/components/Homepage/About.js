import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="container about pt-3">

                <div className="about-us">
                    <div className="about-img">
                        <img src="pic 1.jpg" className="img-fluid" style={{ borderRadius: "16px" }} />
                    </div>
                    <span>
                        <h3 id="header" className="display-4 textsemibold pt-4 pb-5" style={{ marginLeft: "400px" }}>About the Project</h3>
                    </span>
                    <div className="about-txt d-flex align-content-center flex-wrap">
                        {/* <h4 className="mb-4 textsemibold text-white">We are a Team .</h4> */}
                        <p className="text-white text-justify about-content">This device successfully detects temperature, humidity, and air quality within the cold storage container while monitoring its position in real time. The owner may also lock and unlock the device remotely, making it incredibly safe and dependable. Additionally, this  low-cost method makes use of AWS to retrieve data from remote sensors and display it on a website for convenient cold storage container monitoring.</p>
                        <form className="custom-input" action="">
                            <button type="button" className="custom-button">Click to Learn More!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}