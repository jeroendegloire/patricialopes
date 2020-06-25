export default {
  type: 'object',
  name: 'filterableGrid',
  title: 'Cinematography grid',
  fields: [
    {
      name: 'filterable',
      type: 'boolean'
    },
    {
      type: 'array',
      title: 'Cinematography items',
      name: 'items',
      of: [
        {
          type: 'reference',
          to: [{ type: 'cinematography' }]
        }
      ]
    }
  ]
}
