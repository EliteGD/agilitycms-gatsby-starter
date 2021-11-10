import React from "react"
import Carousel from "./Carousel"
import styled from "styled-components"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

// team member-specific carousel wrapper
// use this file to customize the teamMemberCarousel styles
export const TeamMemberCarousel = ({ members, ...props }) => {
  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
        <Carousel {...props}>
          {members.map((m, i) => (
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

export default TeamMemberCarousel

const StyledCard = styled.div`
  margin: 5px;
  width: auto;
`
