export default {
  title: 'Menu item',
  name: 'menuItem',
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
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'subMenuItem' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'link'
    }
  }
}
