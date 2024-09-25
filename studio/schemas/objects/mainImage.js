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
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title (home)',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle (home)',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category (home)',
      options: {
        isHighlighted: true
      }
    },
    {
      type: 'reference',
      name: 'cinematoReference',
      to: [{ type: 'cinematography' }],
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      imageUrl: 'asset.url'
    }
  }
}
