import { style } from '@vanilla-extract/css';

export const boardStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  width: '480px',
  height: '480px',
});

export const flippedBoardStyle = style({
  transform: 'rotate(180deg)',
});