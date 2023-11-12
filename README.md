# Nuxt LIFF Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This module makes it easy to deploy LIFF.

It also supports mock mode using `LIFF Mock`, making it easy to test LIFF apps.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-liff?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## About LIFF (LINE Front-end Framework)

The [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/services/liff/) is a web application framework provided by LY Corporation. When you integrate the LIFF SDK into your web app, you will be able to access information provided by the LINE Platform or use functionalities provided by the LINE app.

## About LIFF Mock

[LIFF Mock](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-mock) is a LIFF plugin to make testing your LIFF app easy. Using LIFF Mock, you can add the mock mode to the LIFF SDK. In the mock mode, your LIFF app is independent of the LIFF server and the LIFF API returns mock data. Therefore, you can perform unit testing or load testing more easily.

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Just set your LIFF ID and you are ready to use LIFF!
- 🚠 &nbsp;Mock mode is available with a single setting
- 🌲 &nbsp;Customize the response from LIFF in mock mode

## Quick Setup

### 1. Add `nuxt-liff` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-liff

# Using yarn
yarn add --dev nuxt-liff

# Using npm
npm install --save-dev nuxt-liff
```

### 2. Add `nuxt-liff` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-liff'
  ]
})
```

### 3. Configure module settings

```js
import * as mockData from './mock-data';

export default defineNuxtConfig({
  modules: [
    'nuxt-liff'
  ],
  // Module settings
  liff: {
    // Specify your LIFF ID
    liffId: 'your-liff-id-here',
    // Set to true to use mock mode
    mock: true,
    // When using mock mode, you can set mock data for each API
    // @see https://developers.line.biz/en/reference/liff/
    mockData: {
      getProfile: mockData.getProfile(),
      getOS: 'android',
    },
  },
});
```

That's it! You can now use Nuxt LIFF Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-liff/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-liff

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-liff.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-liff

[license-src]: https://img.shields.io/npm/l/nuxt-liff.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-liff

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
