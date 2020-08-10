const env = process.env.NODE_ENV || 'development'

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development' ? 'http://localhost:8000' : 'https://patricialopes-preview.herokuapp.com/'
  switch (document._type) {
    case 'page':
      if (!document.slug || !document.slug.current) {
        return baseUrl
      }
      return `${baseUrl}/${document.slug.current}`
    case 'siteSettings':
      return baseUrl
    case 'page':
      if (document._id === 'frontpage' || document._id === 'drafts.frontpage') {
        return baseUrl
      }
      return null
    case 'cinematography':
      if (!document.slug || !document.slug.current) {
        return `${baseUrl}/cinematography/${document.slug.current}`
      }
      return null
    default:
      return null
  }
}
