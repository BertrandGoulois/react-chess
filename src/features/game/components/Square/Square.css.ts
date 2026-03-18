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

export const selectedSquareStyle = style({
  outline: '3px solid yellow',
  outlineOffset: '-3px',
});

export const legalSquareStyle = style({
  outline: '3px solid pink',
  outlineOffset: '-3px',
});