import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.black : theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Main = styled.main`
  width: calc(100% - 48px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    width: calc(100% - 280px);
  }
`;
