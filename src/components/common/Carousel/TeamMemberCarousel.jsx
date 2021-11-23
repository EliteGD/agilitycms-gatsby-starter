import React from "react"
import Carousel from "./Carousel"
import styled from "styled-components"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

// team member-specific carousel wrapper
// use this file to customize the teamMemberCarousel styles
export const TeamMemberCarousel = ({ members, ...props }) => {
  return (
    <div>
      <div className="">
        <Carousel {...props}>
          {members.map((m, i) => (
            <StyledCard key={`${i}`}>
              <div>
                <StyledH2> {m.customFields.jobTitle} </StyledH2>
                <StyledName>{m.customFields.teamMemberName}</StyledName>
              </div>
              <StyledAgilityImage
                image={m.customFields.teamMemberPhoto}
                layout="constrained"
                width="768"
                height="512"
              />
            </StyledCard>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default TeamMemberCarousel
var colors = ["#AE86AA", "#6E9D30", "#F39A1D", "#CB957F"];

const StyledCard = styled.div`
  margin: 15px;
  width: auto;
  background-color: #AE86AA;
  border-radius: 0.5rem;
  padding:20px;

  & + & {
    background-color:#6E9D30;
  }
`
const StyledAgilityImage = styled(AgilityImage)`
border-radius: 0.5rem;
object-fit:cover;
object-position:center;
cursor: pointer;
&:hover {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 0.5s ease;
}
`


const StyledH2 = styled.h2`
font-size:1.5em;
color:#FFFFFF;
`
const StyledName = styled.p`
font-size: 1.2em;
color:#243E63;
font-weight:bold;
padding-bottom:10px;
`

