<script lang="ts" setup>
import ComponenteQ from './ComponenteQ.vue';

defineOptions({inheritAttrs: false});

defineEmits(['click']);

const route = useRoute()
const getRouteBaseName = useRouteBaseName()

getRouteBaseName(route);

console.log(route.name);

const gtm = useGtm();
console.log('gtm', gtm);


</script>

<template>
  <div>
    <ComponenteQ
      v-bind="$attrs"
      msg="Hello World"
    />
  </div>
</template>
