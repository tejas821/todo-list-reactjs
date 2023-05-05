import "./ListItems.css";
import PropTypes from "prop-types";

export default function ListItems({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h2>List : </h2>
      <ul className="list-group">
        {todos.length === 0 && "No ToDos"}
        {todos.map((todo) => {
          return (
            <li className="list-group-item" key={todo.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {todo.title}
                </label>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  if (confirm("Are you sure you want to Delete")) {
                    deleteTodo(todo.id);
                  }
                  return;
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ListItems.prototype = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
