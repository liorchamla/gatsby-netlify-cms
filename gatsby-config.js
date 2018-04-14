module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown/blog`,
        name: "markdown-posts",
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify-cms'
  ],
}
