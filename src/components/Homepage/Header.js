import React from 'react'
import './homepage.css'

export default function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar background">
            <div className="container">
                <a className="navbar-brand mr-4 font-weight-bold d-none d-md-block" href="/" >
                    <img src="logo.png" height="50" alt="logo" className="mr-3" />
                </a>
                <a className="navbar-brand mr-4 font-weight-bold d-block d-md-none " href="/">
                    <img src="logo.png" height="50" alt="mdb logo" className="mr-3" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav ml-auto textmedium">
                        <li className="nav-item active">
                            <a className="nav-a  px-4 btn-blue" href="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a px-4" href="#!">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a px-4" href="#!">Contact Us</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-a px-4" href="/" data-toggle="modal" data-target="#modalRequestProject">Request
                                a
                                Project</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}