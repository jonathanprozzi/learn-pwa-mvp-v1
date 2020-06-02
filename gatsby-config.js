module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
