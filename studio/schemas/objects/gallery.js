export default {
  type: 'object',
  name: 'gallery',
  title: 'Photo grid',
  fields: [
    {
      title: 'Images',
      name: 'items',
      type: 'array',
      of: [{ type: 'galleryImage' }]
    }
  ]
}
