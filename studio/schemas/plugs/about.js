export default {
  type: 'object',
  name: 'about',
  title: 'About the author',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
