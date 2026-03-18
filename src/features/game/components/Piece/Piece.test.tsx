import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Piece } from "./Piece";

describe("Piece", () => {
  it("should render a piece image", () => {
    render(
      <Piece type="P" color="w" isFlipped={false} onDragStart={() => {}} />,
    );
    expect(screen.getByRole("img")).toBeDefined();
  });

  it("should have correct alt text", () => {
    render(
      <Piece type="P" color="w" isFlipped={false} onDragStart={() => {}} />,
    );
    expect(screen.getByAltText("wP")).toBeDefined();
  });
});
