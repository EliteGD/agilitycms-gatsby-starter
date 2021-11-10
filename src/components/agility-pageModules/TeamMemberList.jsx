import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

import TeamMemberCarousel from "../common/Carousel/TeamMemberCarousel"

const TeamMemberList = () => {
  // graphql query for member lists data
  const data = useStaticQuery(graphql`
    {
      Teammember: allAgilityTeamMember {
        nodes {
          customFields {
            jobTitle
            teamMemberPhoto {
              height
              label
              pixelWidth
              pixelHeight
              url
              width
            }
            teamMemberName
          }
        }
      }
    }
  `)

  const { nodes: TeammemberList } = data.Teammember
  console.log("Team Member List data", data, TeammemberList.length)

  return (
    <>
      {TeammemberList.length > 2 ? (
        <TeamMemberCarousel
          members={TeammemberList}
          autoPlay={true}
          infinite={true}
        />
      ) : (
        <div className="relative px-8 mb-12">
          <div className="max-w-screen-xl mx-auto">
            <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {TeammemberList.map((m, i) => (
                <div
                  className="flex flex-col md:flex-row justify-between max-w-screen-md mx-auto md:py-24 items-center"
                  key={i}
                >
                  <div className="flex-col group mb-8 md:mb-0">
                    <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                      <h1>Name: {m.customFields.teamMemberName}</h1>
                      <h1>Title: {m.customFields.jobTitle}</h1>
                    </div>
                    <div className="relative h-64">
                      <AgilityImage
                        image={m.customFields.teamMemberPhoto}
                        layout="constrained"
                        width="768"
                        height="512"
                        className="rounded-lg object-cover object-center cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TeamMemberList
