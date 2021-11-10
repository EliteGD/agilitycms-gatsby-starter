import React from "react"
import "react-multi-carousel/lib/styles.css"
import MultiCarousel from "react-multi-carousel"

// implementation of base carousel component
// configure settings here
const Carousel = props => {
  const { infinite, autoPlay, autoPlaySpeed } = props

  // change breakpoints later
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
    <MultiCarousel
      responsive={responsive}
      infinite={infinite}
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
    >
      {props.children}
    </MultiCarousel>
  )
}

export default Carousel
