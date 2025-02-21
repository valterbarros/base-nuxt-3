// import { useState } from '#imports';

// Workaround to avoid problems with useState and test coverage after nuxt 3.15.4 update
// TODO: remove it and use direct useState when solve the problem
// similar issue here: https://github.com/nuxt/test-utils/issues/558
export function getState<T>(key: string, init?: (() => T | Ref<T>)): Ref<T> {
  // console.log('key', key, init, useState);
  
  return useState(key, init);
}
