import React, { useState, useEffect } from "react";
import $ from "jquery";
import {
  GoogleMap,
  GroundOverlay,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "500px",
  margin: "20px auto"
};

const GoogleMaps = (props) => {
  const [center, setCenter] = useState({ lat: 40.62, lng: 22.94 });
  //   const params = {
  //     access_key: "",
  //     query: "",
  //     limit: 1,
  //   };
  //   axios
  //     .get("http://api.positionstack.com/v1/forward", { params })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Something went wrong! Try again");
  //     });
  useEffect(() => {
    $.ajax({
      url: "http://api.positionstack.com/v1/forward",
      data: {
        access_key: "",
        query: props.address,
        country: "GR",
        limit: 1,
      },
    }).done(function (data) {
      setCenter({
        lat: data.data[0].latitude,
        lng: data.data[0].longitude,
      });
    });
  },[]);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
