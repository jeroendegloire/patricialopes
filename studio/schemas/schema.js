// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import navMenu from './documents/navMenu'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import cinematography from './documents/cinematography'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import { videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import slimPortableText from './objects/slimPortableText'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import link from './objects/link'
import openGraph from './objects/openGraph'
import gallery from './objects/gallery'
import slideshow from './objects/slideshow'

const allPlugs = Object.values(plugs).map(plug => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'website',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      openGraph,
      link,
      cta,
      siteSettings,
      navMenu,
      page,
      mainImage,
      videoEmbed,
      slimPortableText,
      bodyPortableText,
      slideshow,
      gallery,
      cinematography
    ])
    .concat(allPlugs)
})
