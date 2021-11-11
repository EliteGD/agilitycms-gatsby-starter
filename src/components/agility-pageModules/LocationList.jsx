import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Map from "../common/Map/Map"

const LocationList = () => {
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
            id
          }
        }
      }      
  `)

  const { nodes: LocationList } = data.Location

  console.log('location data',data)
  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">

      <Map markers={LocationList} />     
      </div>
    </div>
  )
}

export default LocationList

