import React, { Component } from 'react'
import './projectview.css'
import { Line } from 'react-chartjs-2';
import Map from '../Maps/Map'
import Sensors from '../sensorData';
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
                                <Sensors name="temprature"/>
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
                                <Sensors name="humidity"/>
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
