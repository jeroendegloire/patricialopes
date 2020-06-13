import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from './src/components/previewIFrame'
import { GoSettings } from 'react-icons/lib/go'

const hiddenDocTypes = listItem =>
  !['siteSettings', 'page', 'cinematography', 'navigationMenu'].includes(listItem.getId())

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
      S.listItem()
        .title('Menus')
        .schemaType('navigationMenu')
        .child(S.documentTypeList('navigationMenu').title('Menus')),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(
          S.documentList('page')
            .title('Pages')
            .menuItems(S.documentTypeList('page').getMenuItems())
            .filter('_type == "page"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('page')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      S.listItem()
        .title('Cinematography')
        .schemaType('cinematography')
        .child(
          S.documentList('cinematography')
            .title('Cinematography')
            .menuItems(S.documentTypeList('cinematography').getMenuItems())
            .filter('_type == "cinematography"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('cinematography')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
