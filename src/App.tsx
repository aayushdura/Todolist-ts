import "./App.css";
import Header from "./components/header";
import Form from "./components/Form";
import Todolists from "./components/Todolists";
import { useState } from "react";
import { Obj } from "./types/Global";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Obj[]>([]);
  const [editTodos, setEditTodos] = useState<Obj>();

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="searchbar">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
        />
      </div>
      <br />
      <div className="Todolists">
        <Todolists
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
        />
      </div>
    </div>
  );
};

export default App;
// interface Itds {
//   id: number;
//   title: string;
//   completed: boolean;
// }
