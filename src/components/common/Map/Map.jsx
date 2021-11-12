import React, { useMemo } from "react"
import GoogleMapReact from "google-map-react"
import MapMarker from "./MapMarker"

const Map = ({ markers, center: currCenter }) => {
  // for now just centre map on first marker
  
  const defaultProps = {
    center: {
      lat: parseFloat( markers[0].latitude),
      lng: parseFloat(markers[0].longitude),
    },
    zoom: 11,
  }

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        // take gmaps api from env variable
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
        defaultCenter={ defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        center={currCenter}
      >
        {markers.map((m, i) => (
          <MapMarker
            lat={m.latitude}
            lng={m.longitude}
            key={`map-marker-${i}`}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
