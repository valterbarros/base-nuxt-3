<script lang="ts" setup>
  defineProps<{ msg: string }>();
</script>
<template>
  <div>
    <h1>Componente</h1>
    <p>{{ msg }}</p>
  </div>
</template>