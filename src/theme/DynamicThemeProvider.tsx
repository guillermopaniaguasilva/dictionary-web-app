import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDictionaryStore } from '../pages/Dictionary/store';
import theme from './index';

export default function DynamicThemeProvider({ children }: PropsWithChildren) {
  const isDarkThemeOn = useDictionaryStore((state) => state.isDarkThemeOn);
  const font = useDictionaryStore((state) => state.font);

  const dynamicTheme = {
    ...theme,
    isDarkThemeOn,
    font,
  };

  return <ThemeProvider theme={dynamicTheme}>{children}</ThemeProvider>;
}
