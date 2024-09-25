export default {
  type: 'object',
  name: 'mediaGallery',
  title: 'Media Gallery',
  fields: [
    {
      title: 'Media',
      name: 'media',
      type: 'array',
      of: [{ type: 'mainImage' }, { type: 'localVideo' }],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Mobile media list'
      }
    }
  }
}
