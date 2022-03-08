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
                                    <h5 className="card-features-title pt-4 text-white">Lorem</h5>
                                    <p className="card-features-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line2" style={{ paddingLeft: " 60px" }}>
                            <div className="card-features">
                                <div className="card-features-body">
                                <h5 className="card-features-title text-white pt-4">Lorem</h5>
                                <p className="card-features-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 " >
                        <div className="col reason_grid line3">
                            <div className="card-features">
                                <div className="card-features-body pt-5" >
                                <h5 className="card-features-title text-white pt-4">Lorem</h5>
                                <p className="card-features-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line4" style={{ paddingLeft: " 60px" }}>
                            <div className="card-features">
                                <div className="card-features-body pt-5" >
                                <h5 className="card-features-title text-white pt-4">Lorem</h5>
                                <p className="card-features-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}