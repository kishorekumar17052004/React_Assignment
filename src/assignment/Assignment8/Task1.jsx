import { useState } from "react";

const Task1 = () => {
  const [username, setUserName] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit >= 0) {
    const newTodo = [...todo];
newTodo[edit] = username;
setTodo(newTodo);
    } else {
      setTodo([...todo, username]);
    }

    setUserName("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((_, index) => index !== id));
  };

  const handleEdit = (id) => {
    setUserName(todo[id]);
    setEdit(id);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Todo List</h1>
          <p className="mt-2 text-sm text-slate-500">
            Add, edit, and remove your daily tasks.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter a task..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95"
          >
            {edit >= 0 ? "Update" : "Add"}
          </button>
        </form>

        <div className="mt-8 space-y-3">
          {todo.length === 0 && (
            <p className="rounded-lg border border-dashed border-slate-300 py-8 text-center text-slate-400">
              No tasks yet. Add your first task above.
            </p>
          )}

          {todo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="min-w-0 flex-1 wrap-break-word font-medium text-slate-700">
                {item}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-200"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task1;
