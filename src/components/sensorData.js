import React, { Component } from 'react';
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

class Sensors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorMsg: '',
    };
  }
  componentDidMount() {
    Amplify.PubSub.subscribe("esp32/counter").subscribe({
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
    const { sensorMsg } = this.state;
    let sensorData = sensorMsg[this.props.name];

    return (
      <div className="Sensor">
        {sensorData}
      </div>
    );
  }
}

export default Sensors;