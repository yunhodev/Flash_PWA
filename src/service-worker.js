/* eslint-disable no-undef */
/* eslint-disable */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

/*
//Only if you use google analytics and wants to send the offline views
workbox.googleAnalytics.initialize()
*/

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';

registerRoute(
  ({url}) => url.pathname.endsWith('.wasm'),
  new StaleWhileRevalidate({
    cacheName: 'wasm-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ]
  })
);
registerRoute(
  ({url}) => url.pathname.endsWith('.js'),
  new StaleWhileRevalidate({
    cacheName: 'js-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ]
  })
);
registerRoute(
  ({url}) => url.pathname.startsWith('/'),
  new StaleWhileRevalidate({
    cacheName: 'other-resources-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ]
  })
);
registerRoute(
  ({url}) => url.pathname.endsWith('.swf'),
  new StaleWhileRevalidate({
    cacheName: 'swf-files-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ]
  })
);

/*
//This is how you can use the network first strategy for files ending with .js
workbox.routing.registerRoute(/.*\.js/, workbox.strategies.StaleWhileRevalidate())

// Use cache but update cache files in the background ASAP
workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css-cache',
  })
)

//Cache first, but defining duration and maximum files
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
)

//Cache first, but defining duration and maximum files
workbox.routing.registerRoute(
  /.*\.(?:swf)/,
  workbox.strategies.cacheFirst({
    cacheName: 'swf-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
)

//Cache first, but defining duration and maximum files
workbox.routing.registerRoute(
  /.*\.(?:js|wasm|)/,
  workbox.strategies.cacheFirst({
    cacheName: 'js-wasm-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
)
*/

/*
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  })
)
*/
