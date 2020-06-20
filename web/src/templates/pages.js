import React from 'react'
import { graphql } from 'gatsby'
import Slideshow from '../components/pages/slideshow'
import HaveSeo from '../components/pages/seo'
import Layout from '../components/layout/layout'
import Text from '../components/pages/text'
import TextImage from '../components/pages/textImage'
import Gird from '../components/pages/gird'
import Video from '../components/pages/video'

export const query = graphql`
    query PageTemplateQuery($id: String!) {
        route: sanityPage(id: { eq: $id }) {
            id
            title
            _key
            _rawContent(resolveReferences: { maxDepth: 10 })
        }
    }
`

const PagesTemplate = ({ data }) => {
    const page = data.sanityPage || data.route
    const content = (page._rawContent || [])
        .filter((c) => !c.disabled)
        .map((c, i) => {
            let el = null
            switch (c._type) {
                case 'slideshow':
                    el = <Slideshow key={c._key} {...c} />
                    break
                case 'textContent':
                    el = <Text key={c._key} {...c} />
                    break
                case 'textWithImage':
                    el = <TextImage key={c._key} {...c} />
                    break
                case 'gallery':
                    el = <Gird key={c._key} {...c} />
                    break
                case 'videoEmbed':
                    el = <Video key={c._key} {...c} />
                    break

                default:
                    el = null
            }
            return el
        })

    return (
        <Layout>
            <HaveSeo />
            <div className=''>{content}</div>
        </Layout>
    )
}

export default PagesTemplate
