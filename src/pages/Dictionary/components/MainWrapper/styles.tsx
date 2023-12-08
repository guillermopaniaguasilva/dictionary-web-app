import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.black : theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 736px;
    margin: auto;
    padding: 0 48px;
  }
`;

export const Main = styled.main`
  width: calc(100% - 48px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
  }
`;
