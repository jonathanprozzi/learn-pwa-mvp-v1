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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessons`,
        path: `${__dirname}/src/lessons/`,
      },
    },
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
  ],
};
