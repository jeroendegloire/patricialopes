export default {
  type: 'object',
  name: 'gallery',
  title: 'Photo grid',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }],
      validation: Rule => Rule.required()
    }
  ]
}
