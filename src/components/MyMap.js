import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 138.616 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 138.616 }} />
      )}
    </GoogleMap>
  ))
);
function MyMap() {
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
      />
    </div>
  );
}

export default MyMap;
