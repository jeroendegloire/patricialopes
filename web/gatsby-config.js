//dot env to hide keys
require("dotenv").config({
  path: `.env`,
});

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Patricia Lopes`,
    description: `Gatsby starter styled with Tailwind by developjahid //seo description here...`,
    keywords: `gatsby, gatsbyjs, etc`,
    synonyms: ["seo", "test", "man"],
    image: "/logo.png",
    author: `@developerjahid`,
    url: `https://www.patricialopes.be`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "l2xxtj60",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)()],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://localhost:8000`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`200`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
