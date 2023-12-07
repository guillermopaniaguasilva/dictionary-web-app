import styled from 'styled-components';

export const PartOfSpeech = styled.h4`
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.lighterBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.bodyM};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin-right: 25px;
  margin-bottom: 0;
`;

export const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: normal;
  margin-top: 34px;
`;

export const DefinitionsList = styled.ul``;

export const Definition = styled.li`
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.lighterBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: 15px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 24px; /* 160% */

  &::marker {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:not(:last-child) {
    margin-bottom: 13x;
  }
`;

export const Synonym = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin-top: 34px;
  margin-left: 39px;
`;
