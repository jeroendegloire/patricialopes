export default {
  type: 'object',
  name: 'slideshow',
  title: 'Slideshow',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }]
    }
  ]
}
