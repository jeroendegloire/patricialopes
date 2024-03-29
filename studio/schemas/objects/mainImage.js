export default {
  name: 'mainImage',
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
        'Important for SEO and accessibility. Use the decision tree to get correct alt text for your image: <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      title: 'alt',
      imageUrl: 'asset.url'
    }
  }
}
