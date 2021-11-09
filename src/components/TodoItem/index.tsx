import { IInitTodo } from "../../interfaces";
interface Props {
  onClose: () => void;
  onCompleted: (params: IInitTodo, index: number) => void;
  className: string;
  todo: IInitTodo[];
  category: boolean;
  title: string;
  test?: string;
  checked: boolean;
}
const TodoItem: React.FC<Props> = ({
  onClose,
  onCompleted,
  className,
  todo,
  category,
  title,
  checked,
  test,
}) => {
  return (
    <>
      <div className={className}>
        <h3>{title}</h3>
        {todo.map((item, index) => {
          return (
            <div key={index} className="item-incomplete">
              <label>
                <div
                  onClick={() => onCompleted(item, index)}
                  className="item-incomplete_box"
                >
                  <input
                    defaultChecked={checked}
                    checked={checked}
                    type="checkbox"
                  />
                  <div className="item-incomplete-content">
                    <p>{item.title}</p>
                    {category && <p>{item.category}</p>}
                  </div>
                </div>
              </label>
            </div>
          );
        })}
      </div>
      {category && (
        <div className="icon-open-input" onClick={() => onClose()}>
          <i className="fas fa-plus-circle fa-3x"></i>
        </div>
      )}
    </>
  );
};
export default TodoItem;
