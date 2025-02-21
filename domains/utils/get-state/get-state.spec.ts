import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import { getState } from './index';
import { ref } from 'vue';

const { useState } = vi.hoisted(() => ({
  useState: vi.fn((_key, fn): Ref<string, string> => (ref(fn()))),
}));

mockNuxtImport('useState', () => useState);

describe('getState', () => {
  it('should call useState with the correct key and init function', () => {
    const key = 'testKey';
    const init = () => 'testValue';

    const result = getState(key, init);

    expect(true).toBe(true);

    expect(useState).toHaveBeenCalledWith(key, init);
    expect(result.value).toBe(init());
  });

  it('should call useState with the correct key and undefined init function', () => {
    const key = 'testKey';
    const expectedRef = ref('testValue');

    useState.mockReturnValue(expectedRef);

    const result = getState(key);

    expect(useState).toHaveBeenCalledWith(key, undefined);
    expect(result).toBe(expectedRef);
  });
});
