export default {
  type: 'object',
  name: 'textContent',
  title: 'Text',
  fields: [
    {
      type: 'bodyPortableText',
      name: 'text',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'text'
    }
  }
}
