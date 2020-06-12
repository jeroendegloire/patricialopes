export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation',
  fields: [
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'link' }]
    }
  ]
}
