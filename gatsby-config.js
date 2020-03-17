module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-122968527-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
  pathPrefix: "/blog",
  // Customize your site metadata:
  siteMetadata: {
    title: `Garrits Blog`,
    author: `Garrit Franke`,
    description: `I write about anything that comes to my mind.✨`,
    social: [
      {
        name: `github`,
        url: `https://github.com/garritfra`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/garrit-franke-0558b1172`,
      },
    ],
  },
}
