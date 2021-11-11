import { useState, useEffect } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ITodo } from "./interfaces";
import { getTodos, addTodos, todoAPI } from "./components/sever/todo/todoAPI";

function App() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const onAddTodo = async (todo: ITodo) => {
    const { data } = await addTodos(todo);
    setTodoList([...todoList, data]);
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  const handleRemove = async (param: ITodo) => {
    await todoAPI.remove(param.id);
    const newTodo = todoList.filter(item => {
      return item.id !== param.id
    })
    setTodoList(newTodo)
  };
  const handleCheckTodo = (todo: ITodo) => {
    const newList = todoList.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          complete: !todo.complete,
        };
      }
      return item;
    });
    setTodoList(newList);
  };

  const todoInComplete = todoList.filter(
    (item): boolean => item.complete === true
  );

  const todoCompleted = todoList.filter(
    (item): boolean => item.complete === false
  );

  useEffect(() => {
    getTodos().then((data) => {
      setTodoList(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header
          lengInComplete={todoInComplete.length}
          lengComplete={todoCompleted.length}
        />
        <TodoApp
          title="Incomplete"
          todoList={todoList}
          onClose={onClose}
          isOpen={isOpen}
          handleCheckTodo={handleCheckTodo}
          className={"incompleted"}
          category={true}
          handleRemove={handleRemove}
        />
        {isOpen && <InputTodo onAddTodo={onAddTodo} onClose={onClose} />}
      </div>
    </div>
  );
}

export default App;
