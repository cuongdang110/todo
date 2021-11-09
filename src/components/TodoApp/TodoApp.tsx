import "./index.css";
import { IInitTodo } from "../../interfaces";
import TodoItem from "../TodoItem";
interface Props {
  onClose: () => void;
  isOpen: Boolean;
  onCompleted: (item: IInitTodo, index: number) => void;
  className: string;
  todo: IInitTodo[];
  category: boolean;
  title: string;
  test?: string;
}
const TodoApp: React.FC<Props> = ({
  onClose,
  onCompleted,
  className,
  category,
  todo,
  title,
}) => {
  const todoInComplete = todo.filter((item): boolean => item.complete === true);
  const todoCompleted = todo.filter((item): boolean => item.complete === false);
  return (
    <div className="wrapper">
      <TodoItem
        checked={false}
        onClose={onClose}
        onCompleted={onCompleted}
        className={className}
        category={category}
        title="Incompleted"
        todo={todoInComplete}
      />
      <TodoItem
        checked={true}
        title="Completed"
        todo={todoCompleted}
        onClose={onClose}
        onCompleted={onCompleted}
        className={"completed"}
        category={false}
      />
    </div>
  );
};

export default TodoApp;
