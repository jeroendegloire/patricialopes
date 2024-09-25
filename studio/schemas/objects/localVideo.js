export default {
  name: 'localVideo',
  type: 'file',
  title: 'Local Video',
  fields: [
    {
      type: 'reference',
      name: 'cinematoReference',
      title: 'Cinematography Reference',
      to: [{ type: 'cinematography' }],
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      title: 'cinematoReference.title'
    }
  }
}
