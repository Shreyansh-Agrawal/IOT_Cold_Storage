import React, { Component } from 'react'
export default class Contact extends Component {
    render() {
        return (
            <section id="contact" style={{backgroundColor:"#fff", padding:"120px 0"}}>
                <h2 className="h1-responsive font-weight-bold text-center my-4 pb-4">CONTACT US</h2>
                <div className="container" >
                    {/* <p className="text-center w-responsive mx-auto mb-5 textsemibold" style="font-size: larger;">Do you have any
                        questions? Please do not hesitate to contact us
                        directly. Our team will come back to you within
                        a matter of hours to help you.</p> */}
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-sm-10">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control mb-4" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control mb-4" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <input type="text" id="defaultContactFormEmail" className="form-control mb-4"
                                            placeholder="Subject"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" id="defaultContactFormEmail" className="form-control mb-4"
                                            placeholder="E-mail"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <a className="btn white-text textsemibold ml-0 sendbtn btn-blue" >Send</a>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

            </section>
        )
    }
}
