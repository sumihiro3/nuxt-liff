<template>
  <h1>nuxt-liff module playground!</h1>
  <table border="1">
    <tr>
      <td>LIFF Mock</td>
      <td>{{ liffMockMode }}</td>
    </tr>
    <tr>
      <td>getProfile</td>
      <td>{{ JSON.stringify(profile) }}</td>
    </tr>
    <tr>
      <td>getOS</td>
      <td>{{ os }}</td>
    </tr>
    <tr>
      <td>getLanguage</td>
      <td>{{ language }}</td>
    </tr>
    <tr>
      <td>getVersion</td>
      <td>{{ version }}</td>
    </tr>
    <tr>
      <td>getLineVersion</td>
      <td>{{ lineVersion }}</td>
    </tr>
    <tr>
      <td>isInClient</td>
      <td>{{ isInClient }}</td>
    </tr>
    <tr>
      <td>isLoggedIn</td>
      <td>{{ isLoggedIn }}</td>
    </tr>
    <tr>
      <td>getAccessToken</td>
      <td>{{ accessToken }}</td>
    </tr>
    <tr>
      <td>getIDToken</td>
      <td>{{ iDToken }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
const { $liff } = useNuxtApp();
import type { Profile } from '@liff/get-profile';
const liffMockMode = ref<boolean>(false);
// liff data
const profile = ref<Profile | undefined>(undefined);
const os = ref<string | undefined>(undefined);
const language = ref<string | undefined>(undefined);
const version = ref<string | undefined>(undefined);
const lineVersion = ref<string | null>(null);
const isInClient = ref<boolean>(false);
const isLoggedIn = ref<boolean>(false);
const accessToken = ref<string | null>(null);
const iDToken = ref<string | null>(null);

onMounted(async () => {
  const config = useRuntimeConfig();
  const liffConfig = config?.public?.liff;
  const isMock = liffConfig.mock;
  if (!$liff.isLoggedIn()) {
    await $liff.login();
  }
  liffMockMode.value = isMock;
  profile.value = await $liff.getProfile();
  os.value = $liff.getOS()?.toString();
  language.value = $liff.getLanguage();
  version.value = $liff.getVersion();
  lineVersion.value = $liff.getLineVersion();
  isInClient.value = $liff.isInClient();
  isLoggedIn.value = $liff.isLoggedIn();
  accessToken.value = $liff.getAccessToken();
  iDToken.value = $liff.getIDToken();
});
</script>
