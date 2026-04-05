export default function TodoItem({
  editId,
  todo,
  editedTask,
  setEditedTask,
  saveEdit,
  deleteTask,
  setEditId,
}) {
  return (
    <>
      {editId === todo.id ? (
        <>
          <input
            placeholder="write the task"
            className="m-4 p-4 text-black"
            type="text"
            value={editedTask}
            onChange={(e) => {
              setEditedTask(e.target.value);
            }}
          />

          <button
            className="bg-black text-white hover:bg-blue-500 active:bg-blue-700 w-24 h-6 m-2 p-2"
            onClick={saveEdit}
          >
            save
          </button>
        </>
      ) : (
        <>
          <span>{todo.task}</span>

          <button
            className="bg-black text-white hover:bg-blue-500 active:bg-blue-700 w-24 h-6 m-2 p-2"
            onClick={() => {
              deleteTask(todo.id);
            }}
          >
            Delete
          </button>
          <button
            className="bg-black text-white hover:bg-blue-500 active:bg-blue-700 w-24 h-6 m-2 p-2"
            onClick={() => {
              setEditId(todo.id);
              setEditedTask(todo.task);
            }}
          >
            edit
          </button>
        </>
      )}
    </>
  );
}
