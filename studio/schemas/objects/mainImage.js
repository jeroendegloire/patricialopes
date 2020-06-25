export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  validation: Rule => Rule.required(),
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
      imageUrl: 'image.asset->url',
      title: 'alt'
    }
  }
}
