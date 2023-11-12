import * as mockData from './mock-data';

export default defineNuxtConfig({
  // ssr: false,
  modules: ['../src/module'],
  // モジュール設定
  liff: {
    // LIFF ID を設定してください
    liffId: 'your-liff-id-here',
    // モックモードを使う場合は true を設定してください
    mock: true,
    // モックモードを使う場合、各 API のモックデータを設定できます
    mockData: {
      getProfile: mockData.getProfile(),
      getOS: 'android',
    },
  },
  devtools: { enabled: true },
});
