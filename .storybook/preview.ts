import type { Preview } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import { themes } from "@storybook/theming";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [withPerformance];
