
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/park",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/park"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23564, hash: '8c8fa10299cb5ded1641462ce42fe7df021661b855ccb7d7e0687681a3116331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: 'ca0cafacff7b2cfd4ffa24512e297c492957caacbfc7f6537c0e4cdbe554081c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'park/index.html': {size: 32491, hash: '8527745a040422d2a748af0e1cb98e9b20d8aa8e6ed367ae338b003ebfe8a0f6', text: () => import('./assets-chunks/park_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
