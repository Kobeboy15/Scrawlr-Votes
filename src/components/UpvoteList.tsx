import { PlusIcon } from "./Icons";
import UpvoteItem from "./UpvoteItem";
import { VoteRecord, Vote } from "../types/UpvoteTypes";
import { Action } from "../types/UpvoteContextTypes";
import { useVotesSetter } from "../context/UpvoteContext";

export default function UpvoteList(props: VoteRecord) {
  return (
    <li className="flex flex-col items-center flex-1 gap-2 sm:flex-row fade-in">
      <UpvoteItemContainer {...props} />
      <AddItem {...props} />
    </li>
  );
}

function UpvoteItemContainer({ id, votes }: VoteRecord) {
  return (
    <div className="flex-1 w-full overflow-auto max-w-full sm:max-w-sm flex gap-3 p-3 border-[1.5px] border-gray-300 dark:border-transparent dark:bg-zinc-800/85 rounded-lg transition-colors duration-300">
      {votes.map((item: Vote, index: number) => {
        return (
          <UpvoteItem
            key={`list${index}`}
            parentId={id}
            index={index}
            vote={item}
          />
        );
      })}
    </div>
  );
}

function AddItem({ id }: { id: number }) {
  const dispatch: React.Dispatch<Action> = useVotesSetter();
  return (
    <div className="w-full sm:p-3 sm:w-auto">
      <button
        className="flex items-center justify-center w-full p-2 transition-colors duration-150 rounded-lg sm:w-auto bg-default-background text-default-arrow"
        onClick={() => {
          dispatch({
            type: "addListItem",
            id: id,
          });
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
