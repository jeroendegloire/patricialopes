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
                  buildHookId: '5eda0209d1afe06a48843a8a',
                  title: 'Maison Beige CMS',
                  name: 'maisonbeige',
                  apiId: '5f21daed-82c0-47cf-9c6d-288385b538dd'
                },
                {
                  buildHookId: '5eda0209a83b8b04611b62a8',
                  title: 'Maison beige Frontend',
                  name: 'maisonbeige',
                  apiId: '25299521-03d7-468e-8c7a-f9c1413aa21e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeroendegloire/maisonbeige',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://maisonbeige.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
