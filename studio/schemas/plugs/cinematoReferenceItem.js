export default {
  type: 'object',
  name: 'cinematoReferenceItem',
  fields: [
    {
      type: 'reference',
      name: 'cinematoReference',
      to: [{ type: 'cinematography' }],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'cinematoReference.title',
      imageUrl: 'cinematoReference.image.asset.url'
    }
  }
}
