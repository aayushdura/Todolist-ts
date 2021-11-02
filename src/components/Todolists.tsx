import "./Todolists.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import { Props, Obj } from "../types/Global";

const Todolists = (props: Props) => {
  const { todos, setTodos, setEditTodos, setInput } = props;
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id: string) => {
    const editingTodo: any = todos.find((todo) => todo.id === id);
    if (editingTodo) {
      setEditTodos(editingTodo);
      setInput(editingTodo.title);
    }
  };
  const handleCompleted = (todo: Obj) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, title: todo.title, completed: !todo.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const style: string =
            todo.completed !== true ? "" : "underline overline";
          const style1: string = todo.completed !== true ? "" : "lightseagreen";
          const status: string =
            todo.completed === true ? "Task Done" : "Task remaining";
          return (
            <ul key={todo.id}>
              <li className="list">
                <span
                  className="liitem"
                  style={{ textDecoration: style, color: style1 }}
                >
                  {todo.title}
                </span>
                <Checkbox
                  color="primary"
                  checked={todo.completed}
                  onChange={() => handleCompleted(todo)}
                />
                <IconButton
                  className="Edit"
                  color="secondary"
                  onClick={() => handleEdit(todo.id)}
                >
                  <EditIcon style={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <span style={{ color: style1 }}>{status}</span>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolists;
