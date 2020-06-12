export default {
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'mainImage' }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
