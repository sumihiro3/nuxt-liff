<template>
  <div>Nuxt module playground!</div>
</template>

<script setup lang="ts">
const { $liff } = useNuxtApp();

onMounted(async () => {
  const config = useRuntimeConfig();
  const liffConfig = config?.public?.liff;
  const isMock = liffConfig.mock;
  console.log(`Liff: ${JSON.stringify($liff)}`);
  if (isMock) {
    console.log('Mock mode');
    await $liff.login();
    const profile = await $liff.getProfile();
    console.log(JSON.stringify(profile));
    return;
  }
});
</script>
