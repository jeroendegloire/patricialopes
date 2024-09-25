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
      title: 'Featured images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }],
      validation: Rule => Rule.required(),
      description: 'Max 3 files, second one is we use on mobile'
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
