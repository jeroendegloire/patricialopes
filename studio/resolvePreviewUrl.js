const env = process.env.NODE_ENV || 'development'

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development' ? 'http://localhost:8000' : 'https://preview.patricialopes.be'
  switch (document._type) {
    case 'page':
      if (!document.slug || !document.slug.current) {
        return `${baseUrl}?secret=sUp3rS3cR3t`
      }
      return `${baseUrl}/${document.slug.current}?secret=sUp3rS3cR3t`
    case 'cinematography':
      if (!document.slug || !document.slug.current) {
        return `${baseUrl}/cinematography/${document.slug.current}?secret=sUp3rS3cR3t`
      }
      return null
    default:
      return null
  }
}
