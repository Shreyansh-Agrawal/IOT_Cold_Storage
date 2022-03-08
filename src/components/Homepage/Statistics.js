import React, { Component } from 'react'
// import $ from 'jquery';

export default class Statistics extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="container-fluid " style={{height: "200px"}}>
                <div className='stats'>
                    <div className="container pt-3">
                        <div className="card-deck">
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                    <h1 className="card-title-counter textmedium text-blue" data-target="1764">0</h1>
                                    <h5 className="card-title textbold">Lorem Ipsum</h5>
                                </div>

                            </div>
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                    <h1 className="card-title-counter textmedium text-blue" data-target="364">0</h1>
                                    <h5 className="card-title textbold">Lorem Ipsum</h5>
                                </div>

                            </div>
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-users"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                    <h1 className="card-title-counter textmedium text-blue" data-target="134">0</h1>
                                    <h5 className="card-title textbold">Lorem Ipsum</h5>
                                </div>
                            </div>
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-building"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                    <h1 className="card-title-counter textmedium text-blue" data-target="1364">0</h1>
                                    <h5 className="card-title textbold">Lorem Ipsum</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}