module.exports = {
  siteMetadata: {
    title: `Maria Ada - Fashion Designer`,
    description: `¡Hola!`,
    author: `@braisc`,
    imageShare: `sharing.png`,
    url: 'https://www.mariaada.es',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
      __key: 'content',
    },
  ],
};
