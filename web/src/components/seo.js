import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, keywords, image, synonyms }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords,
          defaultSynonyms,
          defaultTitle,
        },
      },
    }) => {
      //synonyms
      const syno = synonyms || defaultSynonyms;
      const synkey = syno.map((syn) => syn);

      const seo = {
        defaultTitle: defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : image || url + defaultImage}`,
        keywords: `${
          keywords
            ? keywords + "," + synkey
            : keywords + "," + synkey || defaultKeywords + defaultSynonyms
        }`,
      };

      // schema.org in JSONLD format
      // https://developers.google.com/search/docs/guides/intro-structured-data
      // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

      const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: "https://www.patricialopes.be",
        headline:
          "Freelance Director of Photography based in Londen and Brussels.",
        inLanguage: "en",
        mainEntityOfPage: "https://www.patricialopes.be",
        description: defaultDescription,
        name: "Patrícia Lopes",
        author: {
          "@type": "Person",
          name: "Patrícia Lopes",
        },
        copyrightHolder: {
          "@type": "Person",
          name: "Patrícia Lopes",
        },
        copyrightYear: "2020",
        creator: {
          "@type": "Person",
          name: "Patrícia Lopes",
        },
        publisher: {
          "@type": "Person",
          name: "Patrícia Lopes",
        },
        datePublished: buildTime,
        dateModified: buildTime,
        // image: {
        //   "@type": "ImageObject",
        //   url: `${siteUrl}${defaultBanner}`,
        // },
      };

      const schemaOrgPerson = {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Patrícia Lopes",
        familyName: "Lopes",
        givenName: "Patricia",
        mainEntityOfPage: "https://jasonbarnard.com/",
        description:
          "Award winning Patrícia Lopes is a Portuguese-Brazilian cinematographer who is especially drawn by stories that challenge her to think outside of the box. She has lived abroad since her childhood, giving her the ability to adapt and explore her style to each project solely. ",
        worksFor: "https://www.patricialopes.be",
        jobTitle: {
          type: "DefinedTerm",
          name: "Director of Photography",
          inDefinedTermSet:
            "http://data.europa.eu/esco/occupation/6ba25e0f-7fb8-4879-a1f9-d4f8945966be",
          termCode: "2166.4.3",
        },
        alumniOf: "https://www.luca-arts.be/",
        image:
          "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=2000&fm=jpg&q=100",
        gender: "http://schema.org/Female",
        sameAs: [
          "https://www.linkedin.com/in/patricialopes-dop/",
          "https://www.facebook.com/patricia.lopes.7127",
          "https://vimeo.com/patricialopes",
          "https://www.instagram.com/patricialopes.dop/",
          "https://www.imdb.com/name/nm7859516/",
        ],
        url: [
          "https://www.linkedin.com/in/patricialopes-dop/",
          "https://www.facebook.com/patricia.lopes.7127",
          "https://vimeo.com/patricialopes",
          "https://www.instagram.com/patricialopes.dop/",
          "https://www.imdb.com/name/nm7859516/",
        ],
      };

      // const schemaOrgCreativeWork = {
      //   "@context": "http://schema.org",
      //   "@type": "WebPage",
      //   url: siteUrl,
      //   headline: "Director of Photography",
      //   inLanguage: "en",
      //   mainEntityOfPage: siteUrl,
      //   description: defaultDescription,
      //   name: defaultTitle,
      //   author: {
      //     "@type": "Person",
      //     name: "Patrícia Lopes",
      //   },
      //   copyrightHolder: {
      //     "@type": "Person",
      //     name: "Patrícia Lopes",
      //   },
      //   copyrightYear: "2020",
      //   creator: {
      //     "@type": "Person",
      //     name: "Patrícia Lopes",
      //   },
      //   publisher: {
      //     "@type": "Person",
      //     name: "Patrícia Lopes",
      //   },
      //   datePublished: buildTime,
      //   dateModified: buildTime,
      //   // image: {
      //   //   "@type": "ImageObject",
      //   //   url: `${siteUrl}${defaultBanner}`,
      //   // },
      // };

      // // Initial breadcrumb list

      // const itemListElement = [
      //   {
      //     "@type": "ListItem",
      //     item: {
      //       "@id": siteUrl,
      //       name: "Homepage",
      //     },
      //     position: 1,
      //   },
      // ];

      // let schemaArticle = null;

      // if (article) {
      //   schemaArticle = {
      //     "@context": "http://schema.org",
      //     "@type": "Article",
      //     author: {
      //       "@type": "Person",
      //       name: author,
      //     },
      //     copyrightHolder: {
      //       "@type": "Person",
      //       name: author,
      //     },
      //     copyrightYear: "2019",
      //     creator: {
      //       "@type": "Person",
      //       name: author,
      //     },
      //     publisher: {
      //       "@type": "Organization",
      //       name: author,
      //       logo: {
      //         "@type": "ImageObject",
      //         url: `${siteUrl}${defaultBanner}`,
      //       },
      //     },
      //     datePublished: node.first_publication_date,
      //     dateModified: node.last_publication_date,
      //     description: seo.description,
      //     headline: seo.title,
      //     inLanguage: siteLanguage,
      //     url: seo.url,
      //     name: seo.title,
      //     image: {
      //       "@type": "ImageObject",
      //       url: seo.image,
      //     },
      //     mainEntityOfPage: seo.url,
      //   };
      //   // Push current blogpost into breadcrumb list
      //   itemListElement.push({
      //     "@type": "ListItem",
      //     item: {
      //       "@id": seo.url,
      //       name: seo.title,
      //     },
      //     position: 2,
      //   });
      // }

      // const breadcrumb = {
      //   "@context": "http://schema.org",
      //   "@type": "BreadcrumbList",
      //   description: "Breadcrumbs list",
      //   name: "Breadcrumbs",
      //   itemListElement,
      // };

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
            "@context": "https://schema.org/", "@type": "Person", "name":
            "Patrícia Lopes", "alternateName": "Patricia Lopes", description:
            "Award winning Patrícia Lopes is a Portuguese-Brazilian
            cinematographer who is especially drawn by stories that challenge
            her to think outside of the box. She has lived abroad since her
            childhood, giving her the ability to adapt and explore her style to
            each project solely. ", "url": "https://www.patricialopes.be",
            "image":
            "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=1200&fm=jpg&q=100",
            "sameAs": [ "https://www.facebook.com/patricia.lopes.7127",
            "https://www.instagram.com/patricialopes.dop",
            "https://vimeo.com/patricialopes",
            "https://www.linkedin.com/in/patricialopes-dop",
            "https://www.imdb.com/name/nm7859516" ], "jobTitle": "Director of
            Photography"
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
        defaultDescription: description
        defaultImage: image
        url
        defaultKeywords: keywords
        defaultSynonyms: synonyms
      }
    }
  }
`;
