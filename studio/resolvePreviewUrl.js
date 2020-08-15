const env = process.env.NODE_ENV || 'development'

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development' ? 'http://localhost:8000' : 'https://preview.patricialopes.be'
  switch (document._type) {
    case 'page':
      if (!document.slug || !document.slug.current) {
        return `${baseUrl}`
      }
      return `${baseUrl}/${document.slug.current}`
    case 'cinematography':
      if (!document.slug || !document.slug.current) {
        return `${baseUrl}/cinematography/${document.slug.current}`
      }
      return null
    default:
      return null
  }
}
