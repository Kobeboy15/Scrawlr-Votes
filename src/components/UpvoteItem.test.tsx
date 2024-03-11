import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpvoteItem from "./UpvoteItem";
import { useVotesSetter } from "../context/UpvoteContext";

vi.mock("../context/UpvoteContext", () => ({
  useVotesSetter: vi.fn(),
}));

describe("UpvoteItem", () => {
  it("toggles the vote state when clicked", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useVotesSetter).mockReturnValue(mockDispatch);

    const { getByRole } = render(
      <UpvoteItem parentId={1} index={0} vote={false} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "toggleListItem",
      id: 1,
      index: 0,
      value: true,
    });
  });
});
