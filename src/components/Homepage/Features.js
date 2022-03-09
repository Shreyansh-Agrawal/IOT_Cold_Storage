import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <section className='features_bg' id='features'>
                <div className="container pb-5">
                    <h3 id="header" className="display-4 textsemibold pt-4 pb-5 text-center text-white">Features</h3>
                    <div className="row row-cols-1 row-cols-md-2 " style={{ paddingTop: " 96px" }} >
                        <div className="col reason_grid line1" >
                            <div className="card-features">
                                <div className="card-features-body">
                                    <h5 className="card-features-title text-white pt-4 pb-3">High-Range Sensors</h5>
                                    <p className="card-features-text">Greater measuring and detection range of sensors. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line2" style={{ paddingLeft: " 60px" }}>
                            <div className="card-features">
                                <div className="card-features-body">
                                <h5 className="card-features-title text-white pt-4 pb-3">Remote Training</h5>
                                <p className="card-features-text">GPS keeps track of items present in the container. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 " >
                        <div className="col reason_grid line3">
                            <div className="card-features">
                                <div className="card-features-body pt-5" >
                                <h5 className="card-features-title text-white pt-4 pb-3">Periodic Monitoring</h5>
                                <p className="card-features-text">Timely updates about the condition of the container.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line4" style={{ paddingLeft: " 60px" }}>
                            <div className="card-features">
                                <div className="card-features-body pt-5" >
                                <h5 className="card-features-title text-white pt-4 pb-3">Fetch Data</h5>
                                <p className="card-features-text">Data fetched by the remote sensors are shown on the website using AWS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}