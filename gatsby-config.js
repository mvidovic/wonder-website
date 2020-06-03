module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lightboxImages`,
        path: `${__dirname}/src/lightboxImages`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
          key: `YOUR_GOOGLE_MAPS_STATIC_API_KEY`,
          center: `LATITUDE,LONGITUDE || CITY,REGION`,
      },
  },
  ],
};
