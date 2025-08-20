import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from './src/components/previews/previewIFrame'
import { IoSettingsSharp } from "react-icons/io5";
import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'

// Web preview
import IframePreview from './src/components/previews/iframe/IframePreview'
import SeoPreview from './src/components/previews/seo/SeoPreviews'

// a11y preview
import ColorblindPreview from './src/components/previews/colorblind-filter/ColorblindPreview'

// Web preview configuration
const remoteURL = 'https://devserver-master--patricialopes.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

const hiddenDocTypes = listItem =>
  !['siteSettings', 'page', 'cinematography', 'navigationMenu'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(IoSettingsSharp)
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
                .views([
                  S.view.form().icon(EditIcon),
                  //PreviewIFrame(),
                  S.view
                    .component(IframePreview)
                    .options({ previewURL })
                    .title('Web Preview')
                    .icon(EyeIcon),
                  S.view
                    .component(SeoPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('SEO Preview'),
                  S.view
                    .component(ColorblindPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('Colorblind')
                ])
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
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(IframePreview)
                    .options({ previewURL })
                    .title('Web Preview')
                    .icon(EyeIcon),
                  S.view
                    .component(SeoPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('SEO Preview'),
                  S.view
                    .component(ColorblindPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('Colorblind')
                ])
            )
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
