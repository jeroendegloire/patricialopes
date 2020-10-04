export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeroendegloire/patricalopes',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://www.patricialopes.be',
            category: 'apps'
          },
          {
            title: 'Preview',
            value: 'https://preview.patricialopes.be',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'google-analytics',
      layout: {
        width: 'large'
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%'
            }
          }
        }
      }
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium'
      },
      options: {
        title: 'World map',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:country',
            metrics: 'ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'GEO',
            width: '100%'
          }
        }
      }
    }
  ]
}
