export default {
  type: 'document',
  name: 'product',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'illustration',
      title: 'Image',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'block',
      type: 'bodyPortableText',
      title: 'Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required()
    }
  ]
}
