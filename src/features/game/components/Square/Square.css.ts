import { style, styleVariants } from '@vanilla-extract/css';

export const baseSquareStyle = style({
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const squareColorVariants = styleVariants({
  light: { backgroundColor: '#f0d9b5' },
  dark: { backgroundColor: '#b58863' },
});