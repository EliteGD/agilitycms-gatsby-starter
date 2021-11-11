import React from "react"
import GoogleMapReact from "google-map-react"
import MapMarker from "./MapMarker"

const Map = ({markers}) => {

  // for now just centre map on first marker
  const defaultProps = {
    center: {
      lat: parseFloat( markers[0].customFields.latitude),
      lng: parseFloat(markers[0].customFields.longitude),
    },
    zoom: 11,
  }

  return (
    <div style={{ height: "100vh", width: "500px" }}>
      <GoogleMapReact
      // take gmaps api from env variable 
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map((m,i)=>(
          <MapMarker lat={m.customFields.latitude} lng={m.customFields.longitude} key={`map-marker-${i}`}/>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map

