export default {
  title: 'Child Menu item',
  name: 'subMenuItem',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Url',
      validation: Rule => Rule.uri({ allowRelative: true })
    },

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'link'
    }
  }
}
