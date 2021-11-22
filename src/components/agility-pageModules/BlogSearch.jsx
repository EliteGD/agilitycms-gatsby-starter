import React from "react"
import { graphql, useStaticQuery } from "gatsby"


const BlogSearch = () => {
  // dummy component to get started

  // should contain all post data
  const data = useStaticQuery(graphql`
    {
      Posts: allAgilityPost {
        nodes {
          customFields {
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              url
              label
            }
            content
          }
          id
        }
      }
    }
  `)

  console.log('post data',data)

  return (
    <div className="relative px-8">
      <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <div className="prose max-w-full mx-auto" />
      </div>
    </div>
  )
}

export default BlogSearch
