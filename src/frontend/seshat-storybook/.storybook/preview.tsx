import type { Preview, ReactRenderer } from "@storybook/react-vite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { themes } from "storybook/theming";
import { useDarkMode } from "@vueless/storybook-dark-mode";
import { useMemo } from "react";
import { DocsContainer } from "@storybook/addon-docs/blocks";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

const ThemedDocsContainer = ({ children, context }: any) => {
  const isDark = useDarkMode();
  return (
    <DocsContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </DocsContainer>
  );
};

const preview: Preview = {
  parameters: {
    darkMode: {
      // FORCE the starting theme to dark if you want, or leave as 'light'
      current: "dark",

      // You MUST include 'base' here for Storybook 10 to recognize the object
      dark: {
        ...themes.dark,
        base: "dark",
      },
      light: {
        ...themes.light,
        base: "light",
      },

      stylePreview: true,
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const isDark = useDarkMode(); // This hook detects the Moon/Sun toggle click
      const theme = useMemo(() => {
        return isDark ? darkTheme : lightTheme;
      }, [isDark]);
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
