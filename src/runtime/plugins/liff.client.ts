import { defineNuxtPlugin } from '#app';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import type { ModuleOptions } from '../../module';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin(async (nuxtApp) => {
  const nuxtLiffConfig = useRuntimeConfig().public.liff;
  if (!nuxtLiffConfig) {
    throw new Error('liff module is not configured');
  }
  const liffConfig = nuxtLiffConfig as ModuleOptions;
  console.log('LIFF Plugin injected!');
  console.log(`liffConfig: ${JSON.stringify(liffConfig)}}`);
  console.log(`LIFF ID: ${liffConfig.liffId}`);
  console.log(`Mock mode: ${liffConfig.mock}`);
  if (liffConfig.mock) {
    // LIFF Mock Plugin を登録する
    liff.use(new LiffMockPlugin());
    // mock data を設定する
    liff.$mock.set((p) => ({
      ...p,
      ...liffConfig.mockData, // module options で指定された mock data を上書きする
    }));
  }
  // initialize LIFF app
  await liff.init({ liffId: liffConfig.liffId, mock: liffConfig.mock });
  return {
    provide: {
      liff,
    },
  };
});
