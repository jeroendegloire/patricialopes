export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO settings and tools',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    // {
    //   name: 'navMenu',
    //   type: 'reference',
    //   title: 'Navigation menu',
    //   // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
    //   to: [{ type: 'navigationMenu' }],
    //   description: 'Which nav menu should be shown, if any'
    // },
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
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'slideshow' },
        { type: 'videoEmbed' },
        { type: 'photoGrid' },
        { type: 'gallery' },
        { type: 'textContent' },
        { type: 'textWithImage' },
        { type: 'contact' },
        { type: 'accordion' },
        { type: 'cinematoList' },
        { type: 'mediaGallery' },
        { type: 'twoColumnTextWithImage' }
      ]
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
        baseUrl: 'https://patricialopes-preview.herokuapp.com/', // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return 'https://patricialopes-preview.herokuapp.com/' // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current
        },
        fetchRemote: true // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
      }
    }
    // {
    //   title: 'Include in sitemap',
    //   description: 'For search engines. Will be generateed to /sitemap.xml',
    //   name: 'includeInSitemap',
    //   type: 'boolean',
    //   fieldset: 'seo'
    // },
    // {
    //   title: 'Disallow in robots.txt',
    //   description: 'Hide this route for search engines like google',
    //   name: 'disallowRobots',
    //   type: 'boolean',
    //   fieldset: 'seo'
    // },
    // {
    //   name: 'campaign',
    //   type: 'string',
    //   title: 'Campaign',
    //   description: 'UTM for campaings'
    // }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    },
    prepare({ title, subtitle }) {
      return {
        title
      }
    }
  }
}
