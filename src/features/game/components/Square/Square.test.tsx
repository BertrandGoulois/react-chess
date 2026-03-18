import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Square } from "./Square";

describe("Square", () => {
  it("should render a square", () => {
    render(
      <Square
        square="e2"
        isSelected={false}
        onClick={() => {}}
        isLight={true}
        onDragOver={() => {}}
        onDrop={() => {}}
      />,
    );
    expect(screen.getByTestId("square")).toBeDefined();
  });

  it("should apply selected style when isSelected is true", () => {
    render(
      <Square
        square="e2"
        isSelected={true}
        onClick={() => {}}
        isLight={true}
        onDragOver={() => {}}
        onDrop={() => {}}
      />,
    );
    const square = screen.getByTestId("square");
    expect(square).toHaveAttribute("data-selected", "true");
  });

  it("should call onDrop when a piece is dropped", () => {
    const onDrop = vi.fn();
    render(
      <Square
        square="e2"
        isSelected={false}
        isLight={true}
        isLegal={false}
        onClick={() => {}}
        onDragOver={() => {}}
        onDrop={onDrop}
      />,
    );
    fireEvent.drop(screen.getByTestId("square"));
    expect(onDrop).toHaveBeenCalled();
  });
});
