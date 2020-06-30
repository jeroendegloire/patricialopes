export default {
  type: 'object',
  name: 'cinematoReferenceItem',
  fields: [
    {
      type: 'reference',
      name: 'cinematoReference',
      to: [{ type: 'cinematography' }],
      validation: Rule => Rule.required()
    },
    {
      type: 'mainImage',
      name: 'featuredImage'
    }
  ],
  preview: {
    select: {
      title: 'cinematoReference.title',
      imageUrl: 'cinematoReference.image.asset.url'
    }
  }
}
