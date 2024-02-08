import { useState } from "react";

export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if(newItem === "" ) return
    
       onSubmit(newItem);

       setNewItem("");
      }

    return (<form onSubmit={handleSubmit}>
        <div className="todo-wrap">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            type="text"
            id="item"
            className="todo-input"
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>
        <button className="todo-button">Add</button>
      </form>)
}