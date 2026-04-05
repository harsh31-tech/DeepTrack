import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  editId,
  editedTask,
  setEditedTask,
  saveEdit,
  deleteTask,
  setEditId,
}) {
  const list = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      editId={editId}
      editedTask={editedTask}
      setEditId={setEditId}
      setEditedTask={setEditedTask}
      saveEdit={saveEdit}
      deleteTask={deleteTask}
    />
  ));

  return (
    <>
      <h2 className="text-white text-3xl">Todo List</h2>
      <ul className="text-white text-xl"> {list}</ul>
    </>
  );
}
