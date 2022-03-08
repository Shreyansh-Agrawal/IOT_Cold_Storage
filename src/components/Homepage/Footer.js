import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small pt-4" style={{ backgroundColor: "#0353A4" }}>

                <div className="container text-center text-md-left mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Our Project</h6>
                            <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", borderTop: "1px solid #001233" }} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

                            <h6 className="pt-3 mb-3 textsemibold">Get connected :</h6>
                            <a className="fb-ic" href="https://www.facebook.com/VITCChennai/" target="_blank">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic"
                                href="https://www.google.com/search?q=vellore+institute+of+technology+chennai&sxsrf=ALeKk03oT0XpNOOcWh9wP3cghIpwPZNrBw%3A1623491154994&ei=UoLEYOqRPJKP4-EP1fmR6As&oq=vellore+institute+of+technology+chennai&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgcIABBHELADUMN3WOF4YNZ6aAFwAngAgAHaAogBqAWSAQcwLjIuMC4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwjqgtvs55HxAhWSxzgGHdV8BL0Q4dUDCA8&uact=5"
                                target="_blank">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/company/vitchennai/" target="_blank">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/vit.chennai/?hl=en" target="_blank">
                                <i className="fab fa-instagram white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.youtube.com/channel/UCF2JKnGSPpZk60-ls4BtWRA" target="_blank">
                                <i className="fab fa-youtube white-text"></i>
                            </a>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "30px", borderTop: "1px solid #001233" }} />
                            <p>
                                <i className="fas fa-home mr-3"></i> VIT University, TN 600127
                            </p>
                            <p><a href="mailto:admin.chennai@vit.ac.in">
                                <i className="fas fa-envelope mr-3"></i> admin.chennai@vit.ac.in </a>
                            </p>
                            <p><a href="tel:+91 44 3993 1555">
                                <i className="fas fa-phone mr-3"></i> +91 44 3993 1555</a>
                            </p>
                            <p><a href="#" data-toggle="modal" data-target="#modalDoubtForm">
                                <i className="fas fa-question mr-3"></i> Have Any Further Doubts</a>
                            </p>

                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", borderTop: "1px solid #001233" }} />
                            <p>
                                <a href="#carousel-example-2">Home</a>
                            </p>
                            <p>
                                <a href="#!">Our Team</a>
                            </p>
                            <p>
                                <a href="#!">Explore the Project</a>
                            </p>
                            

                        </div>
                    </div>

                </div>
                <div className="footer-copyright text-center py-3 textsemibold mt-3" style={{ backgroundColor: "#001233" }}>© 2022
                    Copyright:
                    Souvagya Ganguli
                </div>
            </footer >

        )
    }
}