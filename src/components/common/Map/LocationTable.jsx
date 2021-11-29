import React from "react"
import styled from "styled-components"

const LocationTable = ({ markers: locationData, center: currCenter, onClickFn }) => {

  const isActive = (m) => currCenter && (parseFloat( m.latitude) === currCenter.lat) && (parseFloat( m.longitude) === currCenter.lng)

  return (
    <Container>
      {locationData.map((l, i) => (
        <Card
          key={`location-${i}`}
          isActive={isActive(l)}
          onClick={() => {
            onClickFn({
              lat: parseFloat(l.latitude),
              lng: parseFloat(l.longitude),
            })
          }}
        >
          <div>{l.locationName}</div>
          <div>{l.street}</div>
          <div>{`${l.city}, ${l.province}, ${l.country}`}</div>
        </Card>
      ))}
    </Container>
  )
}

export default LocationTable

const Container = styled.div`
  display: grid;
  margin: 0 5px;
  max-height: 600px;
  overflow-y: scroll;
`

const Card = styled.div`
  width: 100%;
  border: 1px solid rgba(113, 128, 150, 0.5);
  background: rgba(247, 250, 252, ${ props => props.isActive ? '0.2' : '0.5'});
  background:  ${ props => props.isActive ? 'rgba(50, 132, 220, 0.5)' : 'rgba(247, 250, 252, 0.5)'  };
  padding: 10px;
  min-height: 200px;

  &:hover {
    background: rgba(66, 149, 220, 0.2);
  }
`
