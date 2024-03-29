export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return  <li key="todo.id">
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      ></input>
      {title}
    </label>
    <button
      className="btn btn-danger"
      onClick={() => deleteTodo(id)}
    >
      Delete
    </button>
  </li>
}