import { createPage, setup } from '@nuxt/test-utils';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('page', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    browser: true,
    dev: true,
  });

  it('renders the index page', async () => {
    const page = await createPage('/');
    expect(page.getByText('nuxt-liff module playground!')).toBeTruthy();
    expect(await page.getByTestId('getOS').textContent()).toContain('android');
  });
});
