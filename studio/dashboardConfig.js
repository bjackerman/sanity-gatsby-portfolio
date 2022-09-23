export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '632dc1f9fbe18d09588fa7f6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3syhtmks',
                  apiId: '27856238-ac51-40b9-87a3-898498a1db34'
                },
                {
                  buildHookId: '632dc1f9b8f8011169c89ffd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o9wfm7o9',
                  apiId: '881f4740-ff34-4e33-8719-94ddb23f75a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjackerman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o9wfm7o9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
