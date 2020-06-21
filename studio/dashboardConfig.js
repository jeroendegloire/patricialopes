export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'gatsby',
      options: {
        sites: [
          {
            siteUrl: 'https://patricialopes-1711684113.gtsb.io/'
          }
        ]
      }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eda0209d1afe06a48843a8a',
                  title: 'Patricia Lopes CMS',
                  name: 'patricialopes-cms',
                  apiId: '5c1db3ee-1712-4437-bbab-bfb4952a2475'
                },
                {
                  buildHookId: '5eda0209a83b8b04611b62a8',
                  title: 'Patricia Lopes Frontend',
                  name: 'patricialopes',
                  apiId: 'to create'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeroendegloire/patricalopes',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://patricialopes.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
