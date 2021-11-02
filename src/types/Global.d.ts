import { Dispatch } from "react";
type Props = {
  input: string;
  setInput: Dispatch<React.SetStateAction<string>>;
  todos: obj[];
  setTodos: Dispatch<React.SetStateAction<obj[]>>;
  editTodos: obj | undefined;
  setEditTodos: Dispatch<React.SetStateAction<obj | undefined>>;
};

type Obj = {
  id: string;
  title: string;
  completed: boolean;
};
