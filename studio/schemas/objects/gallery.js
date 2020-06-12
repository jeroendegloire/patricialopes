export default {
  type: 'object',
  name: 'gallery',
  title: 'Masonry grid.',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }]
    }
  ]
}
