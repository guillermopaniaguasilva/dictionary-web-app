import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;

export const SearchInput = styled.input<{ $hasError: boolean }>`
  outline: none;
  width: 100%;
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.black};
  padding: 16px 24px;
  border-radius: 16px;
  border: ${({ theme, $hasError }) =>
    $hasError ? '1px solid' + theme.colors.red : 'none'};
  background-color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.lightBlack : theme.colors.lighterGrey};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;

  &:focus,
  &:focus-visible {
    border: 1px solid
      ${({ theme, $hasError }) =>
        $hasError ? theme.colors.red : theme.colors.purple};
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.isDarkThemeOn ? theme.colors.white : theme.colors.black};
    opacity: 0.25;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.headingS};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: normal;
  margin-top: 8px;
`;
