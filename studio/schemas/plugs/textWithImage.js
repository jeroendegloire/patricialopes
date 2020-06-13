export default {
  type: 'object',
  name: 'textWithImage',
  title: 'Text with image',
  fields: [
    {
      name: 'imageAlign',
      type: 'string',
      title: 'Image alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' }
        ]
      },
      layout: 'radio',
      validation: Rule => Rule.required()
    },
    {
      type: 'mainImage',
      name: 'image',
      validation: Rule => Rule.required()
    },
    {
      type: 'bodyPortableText',
      name: 'text',
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
