const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  titleSize: calcRem(50),
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray_1: '#222222',
  gradientLeft: '#998CF8',
  gradientRight: '#F383DF',
  status1Color: '#BB94EE',
  status2Color: '#9D76E8',
  status3Color: '#7E58CA',
};

const theme = {
  fontSizes,
  colors,
};

export default theme;
