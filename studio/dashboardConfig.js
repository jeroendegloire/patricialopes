export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee3c39e6dd7c350d389db56',
                  title: 'Patricia Lopes CMS',
                  name: 'patricialopes-sanity',
                  apiId: '5c1db3ee-1712-4437-bbab-bfb4952a2475'
                },
                {
                  buildHookId: '5ee3c39e6dd7c350d389db56',
                  title: 'Patricia Lopes Frontend',
                  name: 'patricialopes-gatsby',
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
