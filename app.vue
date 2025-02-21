<script lang="ts" setup>
import { computed } from 'vue';

const localePath = useLocalePath();
const toPage1 = computed(() => localePath({
  name: 'first',
}));

const toPage2 = computed(() => localePath({
  name: 'second',
}, 'fr'));

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
