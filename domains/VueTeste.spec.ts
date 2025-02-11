import VueTeste from "./VueTeste.vue";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

// const { useState } = vi.hoisted(() => ({
//   useState: () => 1,
// }));

mockNuxtImport('useState', () => () => 1);

const renderCafDocumentCamera = () => render(VueTeste);

describe('VueTeste', () => {
  it('should has state value',() => {
    renderCafDocumentCamera();
    expect(screen.getByText('value 1')).not.toBeNull();
  });
});
