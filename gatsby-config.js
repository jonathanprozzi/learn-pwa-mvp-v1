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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn PWA v1`,
        short_name: `learn-pwa-v1`,
        start_url: `/`,
        background_color: `#fff`,
        // theme_color: `#0091c9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
  ],
};
