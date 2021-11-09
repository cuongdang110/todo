import { useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { initialTodo } from "./constans";
import { IInitTodo } from "./interfaces";

function App() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [todoList, setTodoList] = useState<IInitTodo[]>(initialTodo);

  const onSubmit = (param: IInitTodo) => {
    if (param.title === "" || param.category === "") {
      return param;
    }
    setTodoList([...todoList, param]);
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const onCompleted = (todo: IInitTodo, index: number) => {
    const newList = [...todoList];
    newList[index].complete = false;
    setTodoList(newList);
  };

  const todoInComplete = todoList.filter(
    (item): boolean => item.complete === true
  );

  const todoCompleted = todoList.filter(
    (item): boolean => item.complete === false
  );

  return (
    <div className="App">
      <div className="container">
        <Header inComplete={todoInComplete} complete={todoCompleted} />
        <TodoApp
          title="Incomplete"
          todo={todoList}
          onClose={onClose}
          isOpen={isOpen}
          onCompleted={onCompleted}
          className={"incompleted"}
          category={true}
        />
        {isOpen && <InputTodo onSubmit={onSubmit} onClose={onClose} />}
      </div>
    </div>
  );
}

export default App;
