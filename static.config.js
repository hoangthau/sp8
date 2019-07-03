import path from 'path';
import template from './src/template';

export default {
  //siteRoot: 'https://workinsp8.co',
  Document: template,
  getRoutes: () => {
    return [
      {
        path: '/',
        template: 'src/pages/home',
      },
      {
        path: '/vi',
        template: 'src/pages/home',
        getData: () => ({
          language: 'vi',
        }),
      },
      {
        path: '404',
        template: 'src/pages/NotFound',
      }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    "react-static-plugin-sass",
  ],
}
