<script setup lang="ts">
// const state = ref(0);
const state = useState('state', () => 0);
</script>

<template>
  <div>
    value {{ state }}
  </div>
</template>
