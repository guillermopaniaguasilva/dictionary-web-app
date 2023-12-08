import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    background-color: ${({ theme }) =>
      theme.isDarkThemeOn ? theme.colors.black : theme.colors.white};
  }
`;

export default function GlobalStyles() {
  return <GlobalStyle />;
}
