<script lang="ts" setup>
const localePath = useLocalePath();
const toPage1 = computed(() => localePath({
  name: 'first',
}));

const toPage2 = computed(() => localePath({
  name: 'second',
}, 'fr'));

const { setLocale } = useI18n();

onMounted(() => {
  // setLocale('en');
})
</script>

<template>
  <div>
    {{ $t('welcome') }}
  </div>

  <a href=""></a>
  <NuxtLink :to="toPage1">Page 1</NuxtLink>
  <NuxtLink :to="toPage2">Page 2</NuxtLink>

  <hr>

  Routing:

  <NuxtPage></NuxtPage>
</template>
