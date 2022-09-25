import React from 'react';
import { useLoadScript, GoogleMap } from "@react-google-maps/api"

export default function MapLoading() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyAKJ7DQrtwhAG-sR5EiOh1aCr0-GBqgwJQ" });

  if (!isLoaded) return <div>Loading...</div>
  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: -43, lng: 172 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}