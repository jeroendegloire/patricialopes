export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fieldsets: [{ name: 'headline', title: 'Headline', collapsible: false }],
  fields: [
    {
      name: 'heading_before',
      type: 'string',
      title: 'Before',
      fieldset: 'headline'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      fieldset: 'headline'
    },
    {
      name: 'heading_after',
      type: 'string',
      title: 'After',
      fieldset: 'headline'
    },
    {
      name: 'illustration',
      type: 'illustration'
    }
  ],
  preview: {
    select: {
      heading_before: 'heading_before',
      heading: 'heading',
      heading_after: 'heading_after',
      disabled: 'disabled'
    },
    prepare({ heading_before, heading, heading_after, disabled }) {
      return {
        title: `Hero: ${heading_before} ${heading} ${heading_after} ${disabled ? 'DISABLED' : ''}`
      }
    }
  }
}
