
export default {
  basePath: '/parking-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
