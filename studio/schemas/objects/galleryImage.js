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
    },
    {
      name: 'positionVertical',
      type: 'string',
      title: 'Position Vertical',
      options: {
        list: ['top', 'center', 'bottom'],
        layout: 'radio'
      }
    },
    {
      name: 'positionHorizontal',
      type: 'string',
      title: 'Position Horizontal',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      imageUrl: 'image.asset.url'
    }
  }
}
