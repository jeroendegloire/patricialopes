export default {
  type: 'object',
  name: 'illustration',
  title: 'Illustration',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      image: 'image'
    },
    prepare({ image }) {
      if (!image) {
        return { title: 'Illustration with no image' }
      }
      return {
        title: `Illustration`,
        media: image
      }
    }
  }
}
