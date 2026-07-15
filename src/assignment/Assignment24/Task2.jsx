import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  students: [],
  name: "",
  editingId: null,
}

const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }

    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
        name: "",
      }

    case "EDIT_STUDENT":
      return {
        ...state,
        name: action.payload.name,
        editingId: action.payload.id,
      }

    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, name: action.payload.name }
            : student,
        ),
        name: "",
        editingId: null,
      }

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
        name: state.editingId === action.payload ? "" : state.name,
        editingId: state.editingId === action.payload ? null : state.editingId,
      }

    default:
      return state
  }
}

const Task2 = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(studentReducer, initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = state.name.trim()

    if (!name) return

    if (state.editingId !== null) {
      dispatch({
        type: "UPDATE_STUDENT",
        payload: { id: state.editingId, name },
      })
      return
    }

    dispatch({
      type: "ADD_STUDENT",
      payload: { id: crypto.randomUUID(), name },
    })
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-4xl">
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
          <h1 className="text-3xl font-bold sm:text-4xl">Student Management System</h1>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="student-name" className="sr-only">
              Student name
            </label>
            <input
              id="student-name"
              type="text"
              value={state.name}
              onChange={(event) =>
                dispatch({ type: "SET_NAME", payload: event.target.value })
              }
              placeholder="Enter student name"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
            <button
              type="submit"
              className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              {state.editingId !== null ? "Update Student" : "Add Student"}
            </button>
          </form>

          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-5 py-4">No.</th>
                  <th className="px-5 py-4">Student name</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {state.students.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-5 py-10 text-center text-slate-500">
                      No students added yet.
                    </td>
                  </tr>
                ) : (
                  state.students.map((student, index) => (
                    <tr key={student.id}>
                      <td className="px-5 py-4 text-slate-500">{index + 1}</td>
                      <td className="px-5 py-4 font-semibold">{student.name}</td>
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch({ type: "EDIT_STUDENT", payload: student })
                            }
                            className="rounded-md border border-teal-600 px-3 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              dispatch({ type: "DELETE_STUDENT", payload: student.id })
                            }
                            className="rounded-md border border-red-300 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Task2
