export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [{ name: 'company', title: 'Company details' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site name'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'mainImage',
      fieldset: 'company'
    },
    {
      title: 'Facebook url',
      name: 'facebook',
      type: 'url',
      fieldset: 'company'
    },
    {
      title: 'Instagram url',
      name: 'instagram',
      type: 'url',
      fieldset: 'company'
    },
    {
      title: 'Twitter url',
      name: 'twitter',
      type: 'url',
      fieldset: 'company'
    },
    {
      title: 'Linkedin url',
      name: 'linkedin',
      type: 'url',
      fieldset: 'company'
    },
    {
      title: 'Imdb url',
      name: 'imdb',
      type: 'url',
      fieldset: 'company'
    },
    {
      title: 'Vimeo url',
      name: 'vimeo',
      type: 'url',
      fieldset: 'company'
    }
  ]
}
