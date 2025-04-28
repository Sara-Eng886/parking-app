
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/parking-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/parking-app/park",
    "route": "/parking-app"
  },
  {
    "renderMode": 2,
    "route": "/parking-app/park"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23576, hash: 'ad3c21eb125bc361190abe1bdc347acb61e682c34f1f4bcfa383ab583c217377', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17150, hash: 'a4a7c3e5257dd135d72a2b92a532576938fc8dca4aa9193e41a7b02037eeaf9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'park/index.html': {size: 32503, hash: 'd3f7f9908e22306e3546b850d9b2da2595cfd6250c8b3fbb0cbd2c31b28530cc', text: () => import('./assets-chunks/park_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
