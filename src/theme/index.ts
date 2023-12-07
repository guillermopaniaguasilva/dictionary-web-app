import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const colors = {
  black: '#050505',
  lightBlack: '#1F1F1F',
  lighterBlack: '#2D2D2D',
  lightestBlack: '#3A3A3A',
  grey: '#757575',
  lightGrey: '#E9E9E9',
  lighterGrey: '#F4F4F4',
  white: '#FFFFFF',
  purple: '#A445ED',
  red: '#FF5252',
};

const fontSizes = {
  headingL: '64px',
  headingM: '24px',
  headingS: '20px',
  bodyM: '18px',
  bodyS: '14px',
};

const fontLineHeights = {
  headingL: '77px',
  headingM: '29px',
  headingS: '24px',
  bodyM: '24px',
  bodyS: '17px',
};

const fontWeights = {
  extraLight: 300,
  light: 400,
  normal: 500,
  bold: 700,
};

const fontFamilies = {
  Mono: 'Inconsolata',
  Serif: 'Inter',
  'Sans Serif': 'Lora',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      black: string;
      lightBlack: string;
      lighterBlack: string;
      lightestBlack: string;
      grey: string;
      lightGrey: string;
      lighterGrey: string;
      white: string;
      purple: string;
      red: string;
    };
    fontSizes: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontWeights: {
      extraLight: number;
      light: number;
      normal: number;
      bold: number;
    };
    fontLineHeights: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontFamilies: {
      [key: string]: string;
      Mono: string;
      Serif: string;
      'Sans Serif': string;
    };
    isDarkThemeOn: boolean;
    font: string;
  }
}

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontLineHeights,
  fontWeights,
  fontFamilies,
  isDarkThemeOn: false,
  font: 'Inconsolata',
};

export default theme;
