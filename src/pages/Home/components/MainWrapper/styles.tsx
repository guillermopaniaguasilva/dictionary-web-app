import styled from 'styled-components';

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
