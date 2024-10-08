//dot env to hide keys
require("dotenv").config({
  path: `.env`,
});

const path = require(`path`);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `Patricia Lopes - Director of photography`,
    image:
      "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=630&fm=jpg&q=80",
    url: `https://www.patricialopes.be`,
    siteUrl: `https://www.patricialopes.be`,
  },
  plugins: [
    //`gatsby-plugin-preact`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        ...(process.env.SANITY_READ_TOKEN && {
          token: process.env.SANITY_READ_TOKEN,
        }),
        ...(process.env.SANITY_WATCH_MODE &&
          process.env.SANITY_READ_TOKEN && {
            watchMode: process.env.SANITY_WATCH_MODE,
          }),
        ...(process.env.SANITY_OVERLAY_DRAFTS &&
          process.env.SANITY_READ_TOKEN && {
            overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS,
          }),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patricia Lopes`,
        short_name: `paricia_lopes`,
        start_url: `/`,
        background_color: "#000",
        theme_color: "#000",
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "SANITY_PROJECT_ID",
          "SANITY_DATASET",
          "SANITY_READ_TOKEN",
          "ENABLE_GATSBY_REFRESH_ENDPOINT",
          "SANITY_OVERLAY_DRAFTS",
          "SANITY_WATCH_MODE",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
        ignore: ["node_modules/"],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.patricialopes.be`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/home`],
      },
    },
    //`gatsby-plugin-robots-txt`,
    //"gatsby-plugin-remove-serviceworker",
    // {
    //   resolve: `gatsby-plugin-no-javascript`,
    // },
    // {
    //   resolve: "gatsby-plugin-webpack-entry",
    //   options: {
    //     entry: {
    //       video: path.resolve(__dirname, "src/components/pages", "video.js"),
    //       stills: path.resolve(__dirname, "src/components/pages", "grid.js"),
    //       filterableGrid: path.resolve(
    //         __dirname,
    //         "src/components/pages",
    //         "cinematoList.js"
    //       ),
    //     },
    //   },
    // },
  ],
};
