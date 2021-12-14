/* eslint-disable max-len */
const path = require('path');
const { withPlugins } = require('next-compose-plugins');

const withEnv = require('@moxy/next-env')({
  removePrefixes: true
});
const withReactSvg = require('next-react-svg');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withProdOnlyPlugin = (plugin) => (process.env.NODE_ENV === 'production'
  ? (w) => w
  : plugin);

const withPWA = require('next-pwa');

module.exports = withPlugins([
  withEnv,
  withProdOnlyPlugin(withSourceMaps),
  withProdOnlyPlugin(withBundleAnalyzer),
  withReactSvg,
  withPWA
], {
  env: {
    LOCAL_SERVER: false,
    ENV: process.env.NODE_ENV
  },
  include: path.resolve(__dirname, './public/assets'),
  assetPrefix: process.env.ASSETS_PREFIX ? `/${process.env.ASSETS_PREFIX}` : '',
  publicRuntimeConfig: {
    basePath: process.env.ASSETS_PREFIX ? `/${process.env.ASSETS_PREFIX}` : ''
  },
  pwa: {
    dest: 'public',
    // If you don't need to debug service worker in dev
    // disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true
    // fallbacks: {
    //   // document: '/other-offline', // if you want to fallback to a custom page other than /_offline
    //   //image: ...,
    //   // font: ...,
    //   // audio: ...,
    //   // video: ...,
    // }
  }
});
