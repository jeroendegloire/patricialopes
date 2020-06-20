import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, keywords, image, synonyms }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
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
            const syno = synonyms || defaultSynonyms
            const synkey = syno.map((syn) => syn)

            const seo = {
                defaultTitle: defaultTitle,
                description: description || defaultDescription,
                image: `${image ? image : image || url + defaultImage}`,
                keywords: `${
                    keywords
                        ? keywords + ',' + synkey
                        : keywords + ',' + synkey ||
                          defaultKeywords + defaultSynonyms
                }`,
            }

            return (
                <Helmet title={title} titleTemplate={`%s | ${defaultTitle}`}>
                    <html lang='en' />
                    <meta name='image' content={seo.image} />
                    <meta name='description' content={seo.description} />
                    <meta name='keywords' content={seo.keywords} />
                    <meta property='og:title' content={title} />
                    <meta property='og:description' content={seo.description} />
                    <meta property='og:image' content={seo.image} />
                    <meta name='twitter:title' content={title} />
                    <meta
                        name='twitter:description'
                        content={seo.description}
                    />
                    <meta name='twitter:image' content={seo.image} />
                </Helmet>
            )
        }}
    />
)

export default SEO

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
`
