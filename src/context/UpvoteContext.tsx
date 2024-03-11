import { VoteRecord, VoteRecords } from "../types/UpvoteTypes";
import { Action } from "../types/UpvoteContextTypes";
import { createContext, useContext, useEffect, useReducer } from "react";

const VoteContext = createContext<VoteRecords | null>(null);
const VoteSetterContext = createContext<React.Dispatch<Action>>(() => null);

export function VoteProvider({ children }: { children: React.ReactNode }) {
  const [votes, dispatch] = useReducer(votesReducer, getInitialData());

  function getInitialData() {
    const initialValue = localStorage.getItem("localVotes");
    if (initialValue) {
      return JSON.parse(initialValue);
    } else {
      return initialList;
    }
  }

  useEffect(() => {
    localStorage.setItem("localVotes", JSON.stringify(votes));
  }, [votes]);

  return (
    <VoteContext.Provider value={votes}>
      <VoteSetterContext.Provider value={dispatch}>
        {children}
      </VoteSetterContext.Provider>
    </VoteContext.Provider>
  );
}

/* eslint-disable-next-line */
export function useVotes() {
  return useContext(VoteContext);
}
/* eslint-disable-next-line */
export function useVotesSetter() {
  return useContext(VoteSetterContext);
}

function votesReducer(votes: VoteRecords, action: Action) {
  switch (action.type) {
    case "addList": {
      return [...votes, { id: votes.length, votes: [false] }];
    }

    case "addListItem": {
      const obj = votes.find((item: VoteRecord) => item.id === action.id);
      if (obj) {
        obj.votes.push(false);
      }
      return [...votes];
    }

    case "toggleListItem": {
      const modifiedArray = votes;
      const obj = modifiedArray.find(
        (item: VoteRecord) => item.id === action.id
      );
      if (obj && typeof obj.votes[action.index] === "boolean") {
        obj.votes[action.index] = action.value;
      }
      return [...modifiedArray];
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}

// Default values for initial list //
const initialList = [
  { id: 0, votes: [false, false, false] },
  { id: 1, votes: [false, false] },
  { id: 2, votes: [false, false, false, false, false] },
];
