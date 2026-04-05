import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  let [todos, setTodos] = useState([]);
  let [newTask, setNewTask] = useState("");
  let [editId, setEditId] = useState(null);
  let [editedTask, setEditedTask] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => [...prevTodo, { task: newTask, id: uuidv4() }]);
    setNewTask("");
  };

  let enterKeyHandler = (event) => {
    if (event.key === "Enter") addNewTask();
  };
  let handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  let saveEdit = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === editId ? { ...todo, task: editedTask } : todo,
      ),
    );
    setEditId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
      <TodoInput
        newTask={newTask}
        handleInputChange={handleInputChange}
        enterKeyHandler={enterKeyHandler}
        addNewTask={addNewTask}
      />
      <TodoList
        todos={todos}
        editId={editId}
        editedTask={editedTask}
        setEditId={setEditId}
        setEditedTask={setEditedTask}
        saveEdit={saveEdit}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default TodoApp;
