import React from 'react'
import SEO from '../seo'

const HaveSeo = ({ seo }) => {
    //have seo settings
    const HaveSeoSettings = () => {
        if (seo) {
            return (
                <SEO
                    keywords={seo.focus_keyword}
                    synonyms={seo.focus_synonyms}
                    image={image.asset.url}
                    title={seo.seo_title}
                    description={seo.meta_description}
                />
            )
        } else {
            return <SEO title='Patricia Lopes' />
        }
    }

    return <HaveSeoSettings />
}

export default HaveSeo
