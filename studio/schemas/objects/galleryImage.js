export default {
  name: 'galleryImage',
  type: 'object',
  title: 'Images',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description:
            'Important for SEO and accessibility. Use the decision tree to get correct alt text for your image: <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/>link</a>',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Image ratio',
      options: {
        list: ['square', 'landscape', 'portrait'],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset->url',
      title: 'image.alt'
    }
  }
}
