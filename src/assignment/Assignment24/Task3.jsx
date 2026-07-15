import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  todos: [],
  input: "",
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload }

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        input: "",
      }

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
        ),
      }

    case "RESET_TODOS":
      return initialState

    default:
      return state
  }
}

const Task3 = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (event) => {
    event.preventDefault()
    const text = state.input.trim()

    if (!text) return

    dispatch({
      type: "ADD_TODO",
      payload: { id: crypto.randomUUID(), text, completed: false },
    })
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate("/assignment24")}
          className="mb-8 text-sm font-semibold text-teal-700 transition hover:text-teal-600"
        >
          &larr; Back to Assignment 24
        </button>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-700">
            useReducer Demo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Todo Application</h1>

          <form onSubmit={addTodo} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="todo-input" className="sr-only">
              Todo
            </label>
            <input
              id="todo-input"
              type="text"
              value={state.input}
              onChange={(event) =>
                dispatch({ type: "SET_INPUT", payload: event.target.value })
              }
              placeholder="What needs to be done?"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
            <button
              type="submit"
              className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Add Todo
            </button>
          </form>

          <div className="mt-8 space-y-3">
            {state.todos.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-300 px-5 py-10 text-center text-slate-500">
                No todos yet. Add your first todo above.
              </p>
            ) : (
              state.todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center"
                >
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                    className={`flex-1 text-left font-medium transition ${
                      todo.completed ? "text-slate-400 line-through" : "text-slate-800"
                    }`}
                  >
                    <span
                      className={`mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border ${
                        todo.completed
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-slate-300"
                      }`}
                    >
                      {todo.completed ? "✓" : ""}
                    </span>
                    {todo.text}
                  </button>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                      className="rounded-md border border-teal-600 px-3 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                    >
                      {todo.completed ? "Mark Active" : "Mark Complete"}
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                      className="rounded-md border border-red-300 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <button
            type="button"
            onClick={() => dispatch({ type: "RESET_TODOS" })}
            disabled={state.todos.length === 0}
            className="mt-8 rounded-lg bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reset All Todos
          </button>
        </section>
      </div>
    </main>
  )
}

export default Task3
