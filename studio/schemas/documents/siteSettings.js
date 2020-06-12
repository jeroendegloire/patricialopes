export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [{ name: 'footer', title: 'Footer settings' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph'
    },
    {
      title: 'Company details',
      name: 'companyDetails',
      type: 'slimPortableText',
      fieldset: 'footer'
    },
    {
      title: 'Contact details',
      name: 'contactDetails',
      type: 'slimPortableText',
      fieldset: 'footer'
    }
  ]
}
