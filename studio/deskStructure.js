import S from '@sanity/desk-tool/structure-builder'
import { MdShoppingBasket } from 'react-icons/lib/md'
//import { TiDocumentText } from 'react-icons/lib/ti'
import { FaWpforms } from 'react-icons/lib/fa'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/lib/go'
//import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenDocTypes = listItem =>
  !['route', 'navigationMenu', 'page', 'siteSettings', 'product', 'submission.form'].includes(
    listItem.getId()
  )

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
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      //landingPages,
      S.listItem()
        .title('Pages')
        .schemaType('page')
        //.icon(TiDocumentText)
        .child(
          S.documentList('page')
            .title('Pages')
            .filter('_type == "page"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('page')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      S.listItem()
        .title('Products')
        .schemaType('product')
        .icon(MdShoppingBasket)
        .child(
          S.documentList('product')
            .title('Products')
            .filter('_type == "product"')
        ),
      S.listItem()
        .title('Form submissions')
        .schemaType('submission.form')
        .icon(FaWpforms)
        .child(
          S.documentList('submission.form')
            .title('Form submissions')
            .filter('_type == "submission.form"')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
