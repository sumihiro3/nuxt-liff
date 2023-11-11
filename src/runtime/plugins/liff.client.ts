import { defineNuxtPlugin } from '#app';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import type { ModuleOptions } from '../../module';

export default defineNuxtPlugin(async (_nuxtApp) => {
  const nuxtLiffConfig = useRuntimeConfig().public.liff;
  if (!nuxtLiffConfig) {
    throw new Error('liff module is not configured');
  }
  const liffConfig = nuxtLiffConfig as ModuleOptions;
  console.log('LIFF Plugin injected!');
  console.log(`liffConfig: ${JSON.stringify(liffConfig)}}`);
  console.log(`LIFF ID: ${liffConfig.liffId}`);
  console.log(`Mock mode: ${liffConfig.mock}`);
  console.log(`profile: ${liffConfig.mockData?.profile}`);
  if (liffConfig.mock) {
    // mock mode で起動する
    liff.use(new LiffMockPlugin());
    // set mock profile
    liff.$mock.set((p) => ({
      ...p,
      getProfile: liffConfig.mockData?.profile
        ? liffConfig.mockData?.profile
        : p.getProfile,
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
