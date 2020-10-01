//dot env to hide keys
require("dotenv").config({
  path: `.env`,
});

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `Patricia Lopes - Director of photography`,
    image: "/logo.png",
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
            variants: [`200`, `400`, `500`, `600`, `700`],
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
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://cdn.sanity.io", "https://player.vimeo.com"],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["SANITY_PROJECT_ID", "SANITY_PROJECT_DATASET"],
      },
    },
    // {
    //   resolve: "@mkitio/gatsby-theme-password-protect",
    //   options: {
    //     password: process.env.PASSWORD, // delete or `undefined` to disable password protection
    //   },
    // },
  ],
};
