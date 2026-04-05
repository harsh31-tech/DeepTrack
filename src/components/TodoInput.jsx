export default function TodoInput({
  newTask,
  handleInputChange,
  enterKeyHandler,
  addNewTask,
}) {
  return (
    <>
      <input
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={enterKeyHandler}
        type="text"
        placeholder="write the task"
        className="m-4 p-4"
      />
      <button
        className="bg-black text-white hover:bg-blue-500 active:bg-blue-700 w-32 h-10 m-4 p-2"
        type="submit"
        onClick={addNewTask}
      >
        ADD
      </button>
    </>
  );
}
