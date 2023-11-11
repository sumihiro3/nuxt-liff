import * as mockData from './mock-data';

export default defineNuxtConfig({
  modules: ['../src/module'],
  liff: {
    liffId: '1656948270-xz4QnBz4',
    mock: true,
    mockData: {
      profile: mockData.getProfile(),
    },
  },
  devtools: { enabled: true },
});
