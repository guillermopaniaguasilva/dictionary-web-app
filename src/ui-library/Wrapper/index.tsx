import styled from 'styled-components';

const Wrapper = styled.div`
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

export default Wrapper;
