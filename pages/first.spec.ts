import { render } from "@testing-library/vue";
import { describe, it, vi } from "vitest";
import FirstPage from "./first-page.vue";

describe('first',() => {
  it('should not throw',() => {
    render(FirstPage, {
      props: {
        onClick: vi.fn()
      }
    });
  });
});
