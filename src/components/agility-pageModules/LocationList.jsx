import React, {useState} from "react"
import { graphql, useStaticQuery } from "gatsby"
import Map from "../common/Map/Map"
import LocationTable from "../common/Map/LocationTable"
import styled from "styled-components"

const LocationList = () => {
  const [center, setCenter] = useState(null)
  const data = useStaticQuery(graphql`
    {
      Location: allAgilityLocation {
        nodes {
          customFields {
            city
            country
            latitude
            locationName
            longitude
            postalCode
            province
            street
          }
        }
      }
    }
  `)

  const { nodes  } = data.Location
  const LocationList = nodes.map(m=> m.customFields)

  return (
    <Container>
        {LocationList && LocationList.length && (
          <>
            <LocationTable markers={LocationList} onClickFn={setCenter} center={center}/>
            <Map markers={LocationList} center={center}/>
          </>
        )}
    </Container>
  )
}

export default LocationList

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0 15px;
`
