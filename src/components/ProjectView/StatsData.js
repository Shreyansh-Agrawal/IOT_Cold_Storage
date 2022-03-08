import React, { Component } from 'react'
import './projectview.css'
import { Line } from 'react-chartjs-2';
import Map from '../Maps/Map'
import Sensors from '../sensorData';


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
export default class Stats_data extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         chartData: props.chartData
    //     }
    // }
    // static defaultProps = {
    //     displayTitle: true,
    //     displayLegend: true,
    //     legendPosition: 'right',
    //     location: 'City'
    // }

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
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" >
                            <div className="card-body">
                                <img alt="" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/56/000000/external-air-quality-weather-app-inipagistudio-mixed-inipagistudio.png" />

                                <span className="card-title pl-3 fs-4 fw-bold">Temperature</span>
                                <div className="py-3">
                                <p>{this.state.sensorMsg.temprature}°F</p>
                                {/* <Sensors name="temprature"/> */}
                                    {/* <Line
                                        data={this.state.chartData}
                                        options={{
                                            title: {
                                                display: this.props.displayTitle,
                                                text: 'Largest Cities In ' + this.props.location,
                                                fontSize: 25
                                            },
                                            legend: {
                                                display: this.props.displayLegend,
                                                position: this.props.legendPosition
                                            }
                                        }} 
                                    />*/}
                                </div>

                            </div>

                        </div>

                        <div className="card mt-4" >
                            <div className="card-body">
                                <img alt="" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/56/000000/external-temperature-smart-home-system-inipagistudio-mixed-inipagistudio.png" />

                                <span className="card-title pl-3 fs-4 fw-bold">Humidity</span>
                                <div className="py-3">
                                <p>{this.state.sensorMsg.humidity}%</p>
                                    {/* <Line
                                        data={this.state.chartData}
                                        options={{
                                            title: {
                                                display: this.props.displayTitle,
                                                text: 'Largest Cities In ' + this.props.location,
                                                fontSize: 25
                                            },
                                            legend: {
                                                display: this.props.displayLegend,
                                                position: this.props.legendPosition
                                            }
                                        }}
                                    /> */}
                                </div>
                            </div>
                        </div>

                        <div className="card mt-4" >
                            <div className="card-body">
                                <img alt="" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/56/000000/external-temperature-smart-home-system-inipagistudio-mixed-inipagistudio.png" />
                                <span className="card-title pl-3 fs-4 fw-bold">Air Quality</span>
                                <div className="py-3">Air!
                                    {/* <Line
                                        data={this.state.chartData}
                                        options={{
                                            title: {
                                                display: this.props.displayTitle,
                                                text: 'Largest Cities In ' + this.props.location,
                                                fontSize: 25
                                            },
                                            legend: {
                                                display: this.props.displayLegend,
                                                position: this.props.legendPosition
                                            }
                                        }}
                                    /> */}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card" >
                            <div className="card-body">
                                <img alt="" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/56/000000/external-temperature-smart-home-system-inipagistudio-mixed-inipagistudio.png" />
                                <span className="card-title fs-4 fw-bold pl-3">GPS Location</span>
                                <div className="mapouter pt-4" style={{ overflow: "hidden", width: "100%" }}>
                                        <Map/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
