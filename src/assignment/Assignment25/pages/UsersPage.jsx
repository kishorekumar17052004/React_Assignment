import useApiData from "../useApiData"
import PageState from "./PageState"

const UsersPage = () => {
  const { data: users, isLoading, error } = useApiData("users")

  return (
    <PageState isLoading={isLoading} error={error}>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Users</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.slice(0, 6).map((user) => (
            <article key={user.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-bold text-slate-900">{user.name}</p>
              <p className="mt-1 text-sm text-teal-700">@{user.username}</p>
              <p className="mt-3 text-sm text-slate-500">{user.email}</p>
            </article>
          ))}
        </div>
      </section>
    </PageState>
  )
}

export default UsersPage
