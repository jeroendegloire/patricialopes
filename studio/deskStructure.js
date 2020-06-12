import S from '@sanity/desk-tool/structure-builder'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/lib/go'
import landingPages from './src/structure/landingPages'

const hiddenDocTypes = listItem =>
  !['navigationMenu', 'page', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
