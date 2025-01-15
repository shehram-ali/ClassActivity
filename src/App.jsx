import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <h2> F2021266077_Shehram Ali Todo App</h2>
      <form onSubmit={handleAddTodo} className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add your new todo"
        />
        <button type="submit">+</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-footer">
        <span>You have {todos.length} pending tasks</span>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
