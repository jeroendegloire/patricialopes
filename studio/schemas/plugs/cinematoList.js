export default {
  type: 'object',
  name: 'cinematoList',
  title: 'Cinemato List',
  fields: [
    {
      type: 'array',
      name: 'list',
      of: [{ type: 'cinematoReferenceItem' }],
      options: { layout: 'grid' }
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Cinematography Items'
      }
    }
  }
}
