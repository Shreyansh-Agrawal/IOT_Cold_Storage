import React, { Component } from 'react'
// import $ from 'jquery';

export default class Statistics extends Component {
    componentDidMount() {
        const counters = document.querySelectorAll('.counter-up');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                // console.log(inc);
                // console.log(count);

                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = Math.ceil(count + inc);
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }
    render() {
        return (
            <div className="container-fluid " style={{ height: "200px" }}>
                <div className='stats'>
                    <div className="container pt-3">
                        <div className="card-deck">
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                    <span className="card-title-counter textmedium text-blue counter-up" data-target="90">0</span ><span className="card-title-counter textmedium text-blue " >%</span>
                                    <h5 className="card-title textbold">Success Rate</h5>
                                </div>

                            </div>
                            <div className="card mb-4">
                                {/* <div className="view overlay stats-icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div> */}
                                <div className="card-body text-center" id="counter-box">
                                <span className="card-title-counter textmedium text-blue counter-up" data-target="1000">0</span ><span className="card-title-counter textmedium text-blue " >+</span>
                                    <h5 className="card-title textbold">Happy Customers</h5>
                                </div>

                            </div>
                            <div className="card mb-4">
                                <div className="card-body text-center" id="counter-box">
                                <span className="card-title-counter textmedium text-blue counter-up" data-target="15">0</span ><span className="card-title-counter textmedium text-blue " >+</span>
                                    <h5 className="card-title textbold">Cities</h5>
                                </div>
                            </div>
                            {/* <div className="card mb-4">
                                <div className="view overlay stats-icon">
                                    <i className="fas fa-building"></i>
                                </div>
                                <div className="card-body text-center" id="counter-box">
                                    <h1 className="card-title-counter textmedium text-blue" data-target="1364">0</h1>
                                    <h5 className="card-title textbold">Lorem Ipsum</h5>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}