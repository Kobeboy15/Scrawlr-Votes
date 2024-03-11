type AddListAction = {
  type: "addList";
};

type AddListItemAction = {
  type: "addListItem";
  id: number;
};

type ToggleListItemAction = {
  type: "toggleListItem";
  id: number;
  index: number;
  value: boolean;
};

export type Action = AddListAction | AddListItemAction | ToggleListItemAction;
