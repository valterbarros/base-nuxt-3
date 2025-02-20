<script setup lang="ts">
  import { XSelect } from '@clicksign/excalibur';
  import { fetchT } from './get-teste';

  const { isLoading } = fetchT();
</script>

<template>
  <div>
    pages folder
    <XSelect :items="[{text: 'name', value: 'value'}]" />
    loading state: {{ isLoading }}
    {{ $t('welcome') }}
  </div>
</template>
