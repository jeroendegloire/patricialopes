export default {
  type: 'object',
  name: 'accordion',
  title: 'Accordion',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'text',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
