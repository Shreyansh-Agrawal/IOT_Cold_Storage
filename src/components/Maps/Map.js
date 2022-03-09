import React,{useEffect} from "react";
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
// let lat1= 23
// let lng1 = 74
let lat1= <Sensors name="latitude"/>
let lng1 = <Sensors name="longitude"/>
console.log(lat1)
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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
    {lat1}{lng1}
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
