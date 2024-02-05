/* eslint-disable */

const { cacheableResponse, expiration, routing, strategies } = workbox;
const { ExpirationPlugin } = expiration;
const { registerRoute } = routing;
const { CacheFirst } = strategies;

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
      }),
    ],
  }),
);

registerRoute(
    /\.(?:swf)$/,
    new CacheFirst({
      cacheName: 'swf',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
        }),
      ],
    }),
  );

registerRoute(
    /\.(?:wasm)$/,
    new CacheFirst({
      cacheName: 'WebAssembly',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
        }),
      ],
    }),
  );
