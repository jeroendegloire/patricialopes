/* eslint-disable react/no-unused-prop-types, react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from 'part:@sanity/base/client'
import { assemblePageUrl, toPlainText } from './frontendUtils'
import styles from './FacebookShare.css'

const builder = imageUrlBuilder(sanityClient)

const urlFor = source => {
  return builder.image(source)
}

class FacebookShare extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
    width: PropTypes.number
  }

  static defaultProps = {
    document: null,
    width: 500
  }

  render() {
    const { document, options, width } = this.props
    const { title, seo, image } = document
    const websiteUrl = assemblePageUrl({ document, options })
    const websiteUrlWithoutProtocol = websiteUrl.split('://')[1]

    return (
      <div className={styles.seoItem}>
        <h3>Facebook share</h3>
        <div className={styles.facebookWrapper} style={{ width }}>
          <div className={styles.facebookImageContainer}>
            <img
              className={styles.facebookCardImage}
              src={urlFor(image)
                .width(500)
                .url()}
            />
          </div>
          <div className={styles.facebookCardContent}>
            <div className={styles.facebookCardUrl}>{websiteUrlWithoutProtocol}</div>
            <div className={styles.facebookCardTitle}>
              <a href={websiteUrl}>{title}</a>
            </div>
            <div className={styles.facebookCardDescription}>{seo.meta_description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FacebookShare
