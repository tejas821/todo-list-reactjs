import AddNewItem from "./components/addNewItem/addNewItem";
import "./App.css";
import ListItems from "./components/List/ListItems";
import { useState } from "react";

export default function App() {
  const [todos, SetTodos] = useState([]);

  function addTodo(todo) {
    SetTodos((curretTodos) => {
      return [...curretTodos, todo];
    });
  }
  function toggleTodo(id, status) {
    SetTodos((curretTodos) => {
      return curretTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: status };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    SetTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../public/vite.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            To Do Application
          </a>
        </div>
      </nav>

      <section>
        <AddNewItem onSubmit={addTodo}></AddNewItem>
        <ListItems
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        ></ListItems>
      </section>
    </>
  );
}
