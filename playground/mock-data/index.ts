import type { Profile } from '@liff/get-profile';

/**
 * Get mock profile
 * @returns mock profile
 */
export function getProfile(): Profile {
  console.log('getProfile mock called');
  return {
    displayName: 'Foo',
    userId: 'U0123456789abcdef0123456789abcdef',
    pictureUrl: 'https://example.com/abc.png',
    statusMessage: 'Hello, world!',
  };
}
