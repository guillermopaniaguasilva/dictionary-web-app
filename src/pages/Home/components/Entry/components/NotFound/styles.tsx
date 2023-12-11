import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Emoji = styled.h1`
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Heading = styled.h4`
  color: ${({ theme }) =>
    theme.isDarkThemeOn ? theme.colors.white : theme.colors.black};
  text-align: center;
  font-family: ${({ theme }) => theme.font};
  font-size: 20px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-family: ${({ theme }) => theme.font};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 24px; /* 133.333% */
`;
