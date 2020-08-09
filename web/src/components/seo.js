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
        headline: "Director of Photography",
        inLanguage: "en",
        mainEntityOfPage: "https://www.patricialopes.be",
        description: defaultDescription,
        name: defaultTitle,
        author: {
          "@type": "Person",
          name: "Patricia Lopes",
        },
        copyrightHolder: {
          "@type": "Person",
          name: "Patricia Lopes",
        },
        copyrightYear: "2020",
        creator: {
          "@type": "Person",
          name: "Patricia Lopes",
        },
        publisher: {
          "@type": "Person",
          name: "Patricia Lopes",
        },
        datePublished: buildTime,
        dateModified: buildTime,
        // image: {
        //   "@type": "ImageObject",
        //   url: `${siteUrl}${defaultBanner}`,
        // },
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
      //     name: "Patricia Lopes",
      //   },
      //   copyrightHolder: {
      //     "@type": "Person",
      //     name: "Patricia Lopes",
      //   },
      //   copyrightYear: "2020",
      //   creator: {
      //     "@type": "Person",
      //     name: "Patricia Lopes",
      //   },
      //   publisher: {
      //     "@type": "Person",
      //     name: "Patricia Lopes",
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
