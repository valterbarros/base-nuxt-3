<script setup lang="ts">
  import { XSelect } from '@clicksign/excalibur';
import { useQuery } from '@tanstack/vue-query';

  const { isLoading }  = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      return 'test';
    },
  });
</script>

<template>
  <div>
    pages folder
    <XSelect :items="[{text: 'name', value: 'value'}]" />
    loading state: {{ isLoading }}
  </div>
</template>
