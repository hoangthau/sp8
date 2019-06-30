import path from 'path';

export default {
  //siteRoot: 'https://workinsp8.co',
  getRoutes: () => {
    return [
      {
        path: '/',
        template: 'src/pages/home',
      },
      {
        path: '/ru',
        template: 'src/pages/home',
        getData: () => ({
          language: 'ru',
        }),
      },
      {
        path: '/about',
        template: 'src/pages/about',
      },
      {
        path: '/ru/about',
        template: 'src/pages/about',
        getData: () => ({
          language: 'ru',
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
