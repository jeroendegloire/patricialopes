export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles set the various mark up that the user can use to format content blocks. These
      // correspond to HTML tags, but you can set a custom title and/or value
      // and decide how it will be formatted or displayed where your content is used.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' }
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
              {
                title: 'Title',
                name: 'title',
                type: 'string'
              },
              {
                title: 'Open in new window',
                name: 'target',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    { type: 'accordion' },
    {
      type: 'mainImage',
      options: { hotspot: true }
    },
    { type: 'videoEmbed' }
  ]
}
