import MdVideocam from 'react-icons/lib/md/videocam'
import EmbedPlayer from '../components/preview/EmbedPlayer'

export const videoEmbed = {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url'
    },
    {
      name: 'posterImage',
      type: 'mainImage',
      title: 'Poster image',
      description: 'Sizes: 1600x800'
    }
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer
  }
}
