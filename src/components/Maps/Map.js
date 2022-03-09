import React,{useState, useEffect} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Sensors from "../sensorData";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100wh",
  height: "40vh",
};
// let lat1= 24
// let lng1 = 74
let lat1= <Sensors name="latitude" unit="°N"/>
let lng1 = <Sensors name="longitude" unit="°E"/>
// console.log(lat1)
const center = {
  lat: 24,
  lng: 74
};
// useEffect(()=>{
//   center()
// })

const options = {
  disableDefaultUI: true,
};

export default function Map() {
  
  // const [latNew, setLatNew] = useState(<Sensors name="latitude"/>)
  // const [lngNew, setLngNew] = useState(<Sensors name="longitude"/>)
  // console.log(latNew);
  // console.log(lngNew);
  // useEffect(()=>{
  //   setLatNew(<Sensors name="latitude"/>)
  //   setLngNew(<Sensors name="longitude"/>)
  // },[latNew,lngNew])
  // const center = {
  //   lat: latNew,
  //   lng: lngNew
  // };


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
    Latitude:{lat1}Longitude:{lng1}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
      >
        <Marker position={center}/>
      </GoogleMap>
    </div>
  );
}
