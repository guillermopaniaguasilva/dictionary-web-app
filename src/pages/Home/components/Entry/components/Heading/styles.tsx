import styled from 'styled-components';

export const Word = styled.h1`
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.black};
  font-family: ${({ theme }) => theme.font};
  font-size: 32px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
`;

export const Phonetics = styled.h4`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.bodyM};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.fontLineHeights.bodyM};
`;
