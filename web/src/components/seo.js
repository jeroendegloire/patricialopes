import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, keywords, image, synonyms }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultImage, url, defaultTitle },
      },
    }) => {
      //synonyms
      const syno = synonyms || [];
      const synkey = syno.map((syn) => syn);

      const seo = {
        defaultTitle: defaultTitle,
        description: description || "",
        image: `${image ? image : image || url + defaultImage}`,
        keywords: `${
          keywords ? keywords + ", " + synkey : keywords + ", " + synkey
        }`,
      };

      return (
        <Helmet title={title} titleTemplate={`%s | ${defaultTitle}`}>
          <html lang="en" />
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Patrícia Lopes",
              "alternateName": "Patricia Lopes",
              "description":
                "Award winning Patrícia Lopes is a Portuguese-Brazilian cinematographer who is especially drawn by stories that challenge her to think outside of the box. She has lived abroad since her childhood, giving her the ability to adapt and explore her style to each project solely.",
              "url": "https://www.patricialopes.be",
              "image":
                "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=1200&fm=jpg&q=100",
              "sameA"s: [
                "https://www.facebook.com/patricia.lopes.7127",
                "https://www.instagram.com/patricialopes.dop",
                "https://vimeo.com/patricialopes",
                "https://www.linkedin.com/in/patricialopes-dop",
                "https://www.imdb.com/name/nm7859516",
              ],
              "jobTitle": "Director of Photography",
            }
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Patricia Lopes",
              "url": "https://www.patricialopes.be/",
              "image":
                "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=1200&fm=jpg&q=100",
            }`}
          </script>
        </Helmet>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultImage: image
        url
      }
    }
  }
`;
