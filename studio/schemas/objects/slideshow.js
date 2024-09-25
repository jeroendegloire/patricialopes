export default {
  type: 'object',
  name: 'slideshow',
  title: 'Slideshow',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }, { type: 'localVideo' }],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      imageUrl: 'images.0.asset.url'
    },
    prepare(selection) {
      const { imageUrl } = selection
      return {
        title: 'Slideshow',
        imageUrl
      }
    }
  }
}
