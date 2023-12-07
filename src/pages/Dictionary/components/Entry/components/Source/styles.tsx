import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.bodyS};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: normal;
  text-decoration-line: underline;
`;

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.lighterBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.bodyS};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: normal;
  text-decoration-line: underline;
  display: block;
  max-width: 273px;
  margin-right: 8px;
`;
