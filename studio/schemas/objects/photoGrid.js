export default {
  type: 'object',
  name: 'photoGrid',
  title: 'Photo grid',
  fields: [
    {
      title: 'Images',
      name: 'items',
      type: 'array',
      of: [{ type: 'mainImage' }]
    }
  ]
}
