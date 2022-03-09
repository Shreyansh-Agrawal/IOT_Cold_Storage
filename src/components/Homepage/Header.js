import React from 'react'
import './homepage.css'
// import {
//     Routes,
//     Route,
//     a
// } from "react-router-dom";
// import Table from '../ProjectView/Table';
// import StatsData from '../ProjectView/StatsData';

export default function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar background">
                <div className="container">
                    <a className="navbar-brand mr-4 font-weight-bold d-none d-md-block" href="/" >
                        <img src="logo.png" height="50" alt="logo" className="mr-3" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav ml-auto textmedium">
                            <li className="nav-item active">
                                <a className="nav-a  px-4 text-white" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a px-4 text-white" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a px-4 text-white" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a px-4 text-white" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

{/*             <Routes>
                    <Route exact path='/' element = {<Home/>}>
                    <Route exact path='/dashboard' element={<Header />}>
                    <Route exact path='/dashboard' element={<Table />}>
                    <Route exact path='/dashboard' element={<StatsData />}>
                    <Route exact path='/dashboard' element={<Footer />}>
                </Routes> */}

            //     <Routes>
            //     <Route exact path='/' element={<Home/>}/>
            //     <Route exact path='/about' element={<About/>}/>
            //     <Route exact path='/events' element={<Events/>}/>
            //     <Route exact path='/ourTeam' element={<OurTeam/>}/>
            //     <Route exact path='/gallery' element={<Gallery/>}/>
            //     <Route exact path='/blogs' element={<Blogs/>}/>
            //     <Route exact path='/contact' element={<Contact/>}/>
            // </Routes>