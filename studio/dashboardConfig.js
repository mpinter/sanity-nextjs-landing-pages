export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60bcee63497c424d01933ea8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2yofx7ru',
                  apiId: 'c3517b9c-99c1-4d11-9f4b-60b186f3c44e'
                },
                {
                  buildHookId: '60bcee6317675143d9fd6550',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6wpnsw2e',
                  apiId: '348d9b39-7251-403e-bfd0-99319f48fdf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mpinter/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6wpnsw2e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
