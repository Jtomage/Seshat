import type { Decorator, Preview, ReactRenderer } from "@storybook/react-vite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global Theme",
      defaultValue: "dark",
      toolbar: {
        icon: "paintbrush",
        items: [
          {
            value: "light",
            title: "Light",
          },
          {
            value: "dark",
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
      const theme = createTheme({
        palette: {
          mode: context.globals.theme,
        },
      });

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
