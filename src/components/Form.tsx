import "./form.css";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import { Props, Obj } from "../types/Global";
import { v4 as uuidv4 } from "uuid";

const Form = (props: Props) => {
  const { input, setInput, todos, setTodos, editTodos, setEditTodos } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updateTodos = (title: string, id: string, completed: boolean) => {
      const newTodo = todos.map((todo) =>
        todo.id === id ? { title, id, completed } : todo
      );

      setTodos(newTodo);
      setInput("");
    };
    const todo: Obj = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    setTodos([...todos, todo]);
    setEditTodos(undefined);
    setInput("");
    if (!editTodos) {
      setTodos([...todos, todo]);
      setInput("");
    } else {
      updateTodos(input, editTodos.id, false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const buttonSelect = () => {
    if (!editTodos) {
      return (
        <IconButton type="submit">
          <AddCircleIcon fontSize="large" color="primary" />
        </IconButton>
      );
    }
    return (
      <IconButton type="submit">
        <CheckCircleIcon fontSize="large" color="success" />
      </IconButton>
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="AddBar">
          <TextField
            className="txtfld"
            id="filled-basic"
            label="TasK HerE"
            variant="filled"
            required
            autoComplete="off"
            onChange={handleChange}
            value={input}
          />
          {buttonSelect()}
        </span>
      </form>
    </div>
  );
};

export default Form;
