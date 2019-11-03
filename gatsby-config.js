module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
