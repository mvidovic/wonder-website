import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "../LightBox/Lightbox"

const RecentWork = () => (
  <StaticQuery
    query={graphql`
      query {
        carImages: allFile(filter: { sourceInstanceName: { eq: "lightboxImages" } }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox carImages={data.carImages.edges} />}
  />
)
export default RecentWork


