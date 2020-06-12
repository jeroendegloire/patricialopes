import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from '../../src/components/previewIFrame'

import { MdMenu } from 'react-icons/lib/md'

export default S.listItem()
  .title('Page Builder')
  .child(
    S.list()
      .title('Landing Pages')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .icon(MdMenu)
          .schemaType('navigationMenu')
          .child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
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
          )
      ])
  )
