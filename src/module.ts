import type { Profile } from '@liff/get-profile';
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';
import { fileURLToPath } from 'url';

// Module options TypeScript interface definition
export interface ModuleOptions {
  liffId: string;
  mock: boolean;
  mockData?: {
    profile?: Profile;
  };
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
