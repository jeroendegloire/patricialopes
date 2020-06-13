import MovieIcon from 'react-icons/lib/md/local-movies'

export default {
  type: 'document',
  name: 'cinematography',
  title: 'Cinematography',
  icon: MovieIcon,
  fieldsets: [
    {
      name: 'details',
      title: 'Details',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Music video', value: 'music_video' },
          { title: 'Fiction', value: 'fiction' },
          { title: 'Documentary', value: 'documentary' },
          { title: 'Commercials', value: 'commercials' }
        ]
      },
      layout: 'radio',
      validation: Rule => Rule.required()
    },
    {
      name: 'fragments',
      type: 'array',
      title: 'Fragments',
      of: [{ type: 'mainImage' }]
    },
    {
      name: 'directors',
      type: 'array',
      title: 'Director(s)',
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'dops',
      type: 'array',
      title: "Dop's",
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'production',
      type: 'array',
      title: 'Production',
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client',
      fieldset: 'details'
    },
    {
      name: 'imdb',
      type: 'url',
      title: 'More info url',
      description: 'Can be used to link to imdb or other channels.',
      fieldset: 'details'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title
      }
    }
  }
}
