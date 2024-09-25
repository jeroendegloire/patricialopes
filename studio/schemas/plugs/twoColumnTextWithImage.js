export default {
  type: 'object',
  name: 'twoColumnTextWithImage',
  title: 'Two column text with Image',
  fields: [
    {
      type: 'mainImage',
      name: 'image',
      validation: Rule => Rule.required()
    },
    {
      type: 'bodyPortableText',
      name: 'text',
      validation: Rule => Rule.required()
    },
    {
      type: 'bodyPortableText',
      name: 'textTwo',
      title: 'Text 2',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'text',
      imageUrl: 'image.asset.url'
    }
  }
}
