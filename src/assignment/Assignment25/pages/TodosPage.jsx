import useApiData from "../useApiData"
import PageState from "./PageState"

const TodosPage = () => {
  const { data: todos, isLoading, error } = useApiData("todos")

  return (
    <PageState isLoading={isLoading} error={error}>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Todos</h2>
        <div className="space-y-3">
          {todos.slice(0, 8).map((todo) => (
            <article key={todo.id} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <span
                className={`h-3 w-3 shrink-0 rounded-full ${todo.completed ? "bg-teal-500" : "bg-amber-400"}`}
              />
              <p className={todo.completed ? "text-slate-400 line-through" : "text-slate-700"}>
                {todo.title}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageState>
  )
}

export default TodosPage
