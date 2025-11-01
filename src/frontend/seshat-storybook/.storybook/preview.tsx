import type { Decorator, Preview, ReactRenderer } from "@storybook/react-vite";
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  type Theme,
  makeStaticStyles,
  tokens,
} from "@fluentui/react-components";
import { FC } from "react";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global Theme",
      defaultValue: webLightTheme,
      toolbar: {
        icon: "paintbrush",
        items: [
          {
            value: webLightTheme,
            title: "Light",
          },
          {
            value: webDarkTheme,
            title: "Dark",
          },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      document.body.style.backgroundColor = theme.colorNeutralBackground1;
      return (
        <FluentProvider theme={theme}>
          <Story />
        </FluentProvider>
      );
    },
  ],
};

export default preview;
