export default {
  title: 'Contact',
  name: 'contact',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Background',
      name: 'background',
      type: 'image'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Email',
      name: 'mail',
      type: 'string'
    },
    {
      title: 'VAT number',
      name: 'vat',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare({ title, landingPage, route, link }) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}
