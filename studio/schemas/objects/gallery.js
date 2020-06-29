export default {
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  fields: [
    {
      title: 'Images',
      name: 'items',
      type: 'array',
      of: [{ type: 'galleryImage' }],
      options: { layout: 'grid' }
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Photography items'
      }
    }
  }
}
