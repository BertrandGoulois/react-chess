import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Square } from './Square';

describe('Square', () => {
  it('should render a square', () => {
    render(<Square square="e2" isSelected={false} onClick={() => {}} />);
    expect(screen.getByTestId('square')).toBeDefined();
  });

  it('should apply selected style when isSelected is true', () => {
    render(<Square square="e2" isSelected={true} onClick={() => {}} />);
    const square = screen.getByTestId('square');
    expect(square).toHaveAttribute('data-selected', 'true');
  });
});