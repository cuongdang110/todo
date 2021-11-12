import { ITodo } from "../../interfaces";
import "./style.css";
interface Props {
  onClose: () => void;
  handleCheckTodo: (item: ITodo) => void;
  className: string;
  todo: ITodo[];
  isCategory: boolean;
  title: string;
  checked: boolean;
  handleRemove: (item: ITodo) => void;
  handleOpenEdit?: () => void;
}
const TodoList: React.FC<Props> = ({
  onClose,
  handleCheckTodo,
  className,
  todo,
  isCategory,
  title,
  checked,
  handleRemove,
  handleOpenEdit
}) => {
  return (
    <>
      <div className={className}>
        <h3>{title}</h3>
        {todo.map((item, index) => {
          return (
            <div key={index} className="item-incomplete">
              <div className="item-incomplete_box">
                <input
                  onClick={(e) => handleCheckTodo(item)}
                  defaultChecked={checked}
                  checked={checked}
                  type="checkbox"
                />
                <div className="item-incomplete-content">
                  <p>{item.title}</p>
                  {isCategory && <p>{item.category}</p>}
                </div>
                <span onClick={handleOpenEdit} className='btn-add'>Edit</span>
                <span onClick={() => handleRemove(item)} className="btn-remove">
                  Remove
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {isCategory && (
        <div className="icon-open-input" onClick={() => onClose()}>
          <i className="fas fa-plus-circle fa-3x"></i>
        </div>
      )}
    </>
  );
};
export default TodoList;
