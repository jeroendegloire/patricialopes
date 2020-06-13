import { MdMenu } from 'react-icons/lib/md'

export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation',
  icon: MdMenu,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Menu name'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'menuItem' }]
    }
  ]
}
