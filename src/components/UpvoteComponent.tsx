import UpvoteList from "./UpvoteList";
import { VoteRecords, VoteRecord } from "../types/UpvoteTypes";
import { Action } from "../types/UpvoteContextTypes";
import { useVotes, useVotesSetter } from "../context/UpvoteContext";

export default function UpvoteComponent() {
  const votes: VoteRecords | null = useVotes();
  const dispatch: React.Dispatch<Action> = useVotesSetter();

  if (!votes) {
    return <div>Loading</div>;
  }

  return (
    <>
      <ul className="my-6 flex flex-col w-full max-w-[500px] gap-4 py-8 sm:pl-6 sm:pr-3 px-3 mx-auto bg-white dark:bg-zinc-700 border transition-colors dark:border-zinc-800 rounded-lg shadow-md">
        {votes &&
          votes.map((item: VoteRecord) => {
            return <UpvoteList key={item.id} {...item} />;
          })}
      </ul>
      <div className="flex gap-10 text-sm font-light dark:text-white">
        <button
          className="transition-colors duration-300 border-b border-transparent hover:border-gray-800 hover:dark:border-white"
          onClick={() => {
            dispatch({
              type: "addList",
            });
          }}
        >
          Add more
        </button>
        <button
          className="transition-colors duration-300 border-b border-transparent hover:border-gray-800 hover:dark:border-white"
          onClick={() => {
            localStorage.removeItem("localVotes");
            window.location.reload();
          }}
        >
          Reset List
        </button>
      </div>
    </>
  );
}
