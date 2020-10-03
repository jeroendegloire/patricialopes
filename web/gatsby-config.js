//dot env to hide keys
require("dotenv").config({
  path: `.env`,
});

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `Patricia Lopes - Director of photography`,
    image: "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=630&fm=jpg&q=80",
    url: `https://www.patricialopes.be`,
    siteUrl: `https://www.patricialopes.be`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
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
        exclude: [`/home`],
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`200`, `400`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-133663513-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        defer: true,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://player.vimeo.com"],
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
    'gatsby-plugin-remove-serviceworker'
    // {
    //   resolve: "@mkitio/gatsby-theme-password-protect",
    //   options: {
    //     password: process.env.PASSWORD, // delete or `undefined` to disable password protection
    //   },
    // },
  ],
};
