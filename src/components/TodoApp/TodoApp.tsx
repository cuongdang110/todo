import "./index.css";
import { ITodo } from "../../interfaces";
import TodoList from "../TodoItem";
interface Props {
  onClose: () => void;
  isOpen: Boolean;
  handleCheckTodo: (item: ITodo) => void;
  className: string;
  todoList: ITodo[];
  category: boolean;
  title: string;
  handleRemove: (param: ITodo) => void;
}
const TodoApp: React.FC<Props> = ({
  onClose,
  handleCheckTodo,
  className,
  category,
  todoList,
  handleRemove,
}) => {
  const todoInComplete = todoList.filter(
    (item): boolean => item.complete === true
  );
  const todoCompleted = todoList.filter(
    (item): boolean => item.complete === false
  );
  return (
    <div className="wrapper">
      <TodoList
        checked={false}
        onClose={onClose}
        handleCheckTodo={handleCheckTodo}
        className={className}
        isCategory={category}
        title="Incompleted"
        todo={todoInComplete}
        handleRemove={handleRemove}
      />
      <TodoList
        handleRemove={handleRemove}
        checked={true}
        title="Completed"
        todo={todoCompleted}
        onClose={onClose}
        handleCheckTodo={handleCheckTodo}
        className={"completed"}
        isCategory={false}
      />
    </div>
  );
};

export default TodoApp;
