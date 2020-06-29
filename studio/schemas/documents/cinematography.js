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
    },
    {
      name: 'seo',
      title: 'SEO settings and tools',
      options: { collapsible: true, collapsed: true }
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
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      validation: Rule =>
        Rule.required().custom(slug => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        }),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Music video', value: 'music_video' },
          { title: 'Narrative', value: 'fiction' },
          { title: 'Documentary', value: 'documentary' },
          { title: 'Commercial', value: 'commercials' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'subcategory',
      type: 'string',
      title: 'Subcategory',
      options: {
        list: [
          { title: 'Feature film', value: 'feature_film' },
          { title: 'Short film', value: 'short_film' }
        ]
      }
    },
    {
      name: 'featuredImage',
      type: 'mainImage',
      title: 'Featured image',
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
      title: 'Director',
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'production',
      type: 'array',
      title: 'Producer',
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'dops',
      type: 'array',
      title: 'Director of photography',
      of: [{ type: 'string' }],
      fieldset: 'details'
    },
    {
      name: 'linkUrl',
      type: 'url',
      title: 'Link url',
      description: 'Can be used to link to imdb or other channels.',
      fieldset: 'details'
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link text',
      description: 'Clickable text of link url.',
      fieldset: 'details'
    },
    {
      type: 'bodyPortableText',
      name: 'text',
      validation: Rule => Rule.required(),
      fieldset: 'details'
    },
    {
      title: 'Sharing image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'mainImage',
      fieldset: 'seo'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      fieldset: 'seo',
      options: {
        baseUrl: 'https://.../', // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return 'https://.../' // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return 'simple html representation of your doc' // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return 'page title' // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return 'page description' // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return 'page locale' // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      imageUrl: 'featuredImage.asset.url'
    }
  }
}
