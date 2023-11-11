import type { MockData } from '@line/liff-mock/dist/store/MockDataStore';
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';
import { fileURLToPath } from 'url';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * LIFF ID
   * @default ''
   */
  liffId: string;

  /**
   * LIFF Mock を有効にするかどうか
   * @default false
   */
  mock: boolean;

  /**
   * LIFF Mock で使用するデータ
   * @default {}
   */
  mockData: Partial<MockData>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-liff',
    configKey: 'liff',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },

  // Default configuration options of the Nuxt module
  defaults: {
    liffId: '',
    mock: false,
    mockData: {},
  },
  setup(options: ModuleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    console.log(`module options: ${JSON.stringify(options)}`);
    nuxt.options.runtimeConfig.public.liff = options;
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    // Add liff plugins on client
    addPlugin(resolve(runtimeDir, 'plugins', 'liff.client'));
  },
});
