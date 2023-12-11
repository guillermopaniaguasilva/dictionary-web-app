import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  padding: 16px 24px;
  display: flex;
  font-family: ${({ theme }) => theme.font};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 16px 0;
  }
`;
