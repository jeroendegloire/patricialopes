export default {
  name: 'galleryImage',
  type: 'object',
  title: 'Images',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Ratio',
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
