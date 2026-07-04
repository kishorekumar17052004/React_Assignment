import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import TodoContext from "./context/TodoContext"

const TodoList = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const {todoInput , todos , setTodoInput, edit , handleChange ,handledelete ,handleedit} = useContext(TodoContext)
    const filteredTodos = todos
      .map((todo, index) => ({ todo, index }))
      .filter((item) => item.todo.toLowerCase().includes(search.toLowerCase()))

    const handleSubmit = (e) => {
      e.preventDefault()
      handleChange()
    }

  return (
   <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
    <div className="mx-auto max-w-3xl">
      <button
        onClick={() => navigate("/")}
        className="mb-8 font-medium text-teal-700 transition duration-300 hover:text-teal-900"
      >
        &larr; Back to Assignments
      </button>

      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
          Assignment 17
        </p>
        <h1 className="text-4xl font-bold text-slate-900">Todo List</h1>
        <p className="mt-2 text-slate-600">
          {todos.length === 0
            ? "No tasks yet"
            : `Showing ${filteredTodos.length} of ${todos.length} task${todos.length === 1 ? "" : "s"}`}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-8 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row"
      >
      <input
        type="text"
        placeholder="Enter Todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="min-h-12 flex-1 rounded border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      />

      <button
        type="submit"
        className="min-h-12 rounded bg-teal-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-teal-700"
      >
        {edit === null ? "Add" : "Update"}
      </button>
      </form>

      {todos.length > 0 && (
        <div className="mb-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <input
            type="text"
            placeholder="Search todos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-12 w-full rounded border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>
      )}

      {todos.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Your list is empty</h2>
          <p className="mt-2 text-slate-600">Add your first todo to get started.</p>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">No matching todos</h2>
          <p className="mt-2 text-slate-600">Try another search word.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTodos.map(({ todo, index }) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="break-words text-lg font-medium text-slate-900">
                {todo}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleedit(index)}
                  className="rounded border border-teal-200 px-4 py-2 font-semibold text-teal-700 transition duration-300 hover:border-teal-600 hover:bg-teal-50"
                >
                  Edit
                </button>

                <button
                  onClick={() => handledelete(index)}
                  className="rounded border border-red-200 px-4 py-2 font-semibold text-red-700 transition duration-300 hover:border-red-500 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
   </div>
  )
}

export default TodoList
