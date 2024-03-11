import { ArrowUpIcon } from "./Icons";
import { Vote } from "../types/UpvoteTypes";
import { Action } from "../types/UpvoteContextTypes";
import { useVotesSetter } from "../context/UpvoteContext";

export default function UpvoteItem({
  parentId,
  index,
  vote,
}: {
  parentId: number;
  index: number;
  vote: Vote;
}) {
  const dispatch: React.Dispatch<Action> = useVotesSetter();

  return (
    <button
      onClick={() => {
        dispatch({
          type: "toggleListItem",
          id: parentId,
          index: index,
          value: !vote,
        });
      }}
      className={`p-2 fade-in transition-colors duration-150 rounded-lg ${
        vote
          ? "bg-selected-background dark:bg-selected-arrow text-selected-arrow dark:text-white"
          : "bg-default-background dark:bg-zinc-600 text-default-arrow dark:text-white"
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
