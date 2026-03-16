import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Board } from './Board';

describe('Board', () => {
  it('should render 64 squares', () => {
    render(<Board />);
    const squares = screen.getAllByTestId('square');
    expect(squares).toHaveLength(64);
  });
});