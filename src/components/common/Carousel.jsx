import React from "react"
import styled from 'styled-components'
import "react-multi-carousel/lib/styles.css";
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import Carousel from "react-multi-carousel";

const ImageCarousel = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
        <Carousel responsive={responsive} infinite={true} autoPlay>
          {items.map((m, i) => (
            <StyledCard key={`${i}`}>
              <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                <h1>Name: {m.customFields.jobTitle}</h1>
                <h1>Title: {m.customFields.teamMemberName}</h1>
              </div>
              <AgilityImage
                image={m.customFields.teamMemberPhoto}
                layout="constrained"
                width="768"
                height="512"
                className="rounded-lg object-cover object-center cursor-pointer"
              />
            </StyledCard>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel

const StyledCard = styled.div`
  margin: 5px;
//   height: 300px;
  width: auto;
`
