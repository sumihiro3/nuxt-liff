import * as mockData from './mock-data';

export default defineNuxtConfig({
  modules: ['../src/module'],
  liff: {
    liffId: 'valid-liff-id-here',
    mock: true,
    mockData: {
      getProfile: mockData.getProfile(),
      getOS: 'android',
    },
  },
  devtools: { enabled: true },
});
