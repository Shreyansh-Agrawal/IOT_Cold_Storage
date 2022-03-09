import React, { Component, useEffect } from "react";
import "./App.css";
import About from "./components/Homepage/About";
import Carousel from "./components/Homepage/Carousel";
import Features from "./components/Homepage/Features";
import Header from "./components/Homepage/Header";
import Statistics from "./components/Homepage/Statistics";
import Contact from "./components/Homepage/Contact";
import Footer from "./components/Homepage/Footer";
import StatsData from "./components/ProjectView/StatsData";
import Table from "./components/ProjectView/Table";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import Sensors from "./components/sensorData";

import Amplify, { PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
  },
});
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: process.env.REACT_APP_REGION,
    aws_pubsub_endpoint: `wss://${process.env.REACT_APP_MQTT_ID}.iot.${process.env.REACT_APP_REGION}.amazonaws.com/mqtt`,
  })
);

// Amplify.PubSub.subscribe("esp32/counter").subscribe({
//   next: (data) => console.log("Message received", data),
//   error: (error) => console.error(error),
//   close: () => console.log("Done"),
// });
let lat = <Sensors name="latitude"/>
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorMsg: '',
    };
  }
  componentDidMount() {
    Amplify.PubSub.subscribe("esp32/pub").subscribe({
      next: (data) => {
        try {
          this.setState({ sensorMsg: data.value });
        } catch (error) {
          console.log("Error, are you sending the correct data?");
        }
      },
      error: (error) => console.error(error),
      close: () => console.log("Done"),
    });
  }

  render() {
   // console.log(process.env);
   //console.log(this.state.sensorMsg)
    console.log(this.state.sensorMsg.temprature)
    console.log(this.state.sensorMsg.humidity)
    console.log(lat)

    return (
      <div className="App">
      {lat}
        {/* <p>{this.state.sensorMsg.humidity}</p>
        <p>{this.state.sensorMsg.temprature}</p>
        <p>{this.state.sensorMsg.longitude}</p>
        <p>{this.state.sensorMsg.latitude}</p> */}

        <Header />
        <Carousel />
        <Statistics />
        <About />
        <Features />
        <Contact />
        <Table />
        <StatsData />
        <Footer />
      </div>
    );
  }
}
export default App;