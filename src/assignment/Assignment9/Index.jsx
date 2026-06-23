import withBackgroundColor from "../../hoc/withBackgroundColor"
import UseCard from "./UseCard"

const EnhancedColor = withBackgroundColor(UseCard)

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <section className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Assignment 9 · Task 1
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Background Color HOC
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter any valid CSS color to update the profile card.
          </p>
        </div>

        <div className="space-y-5 [&>input]:w-full [&>input]:rounded-xl [&>input]:border [&>input]:border-slate-300 [&>input]:px-4 [&>input]:py-3 [&>input]:text-slate-900 [&>input]:outline-none [&>input]:transition [&>input]:placeholder:text-slate-400 [&>input]:focus:border-indigo-500 [&>input]:focus:ring-4 [&>input]:focus:ring-indigo-100">
          <EnhancedColor name="Kishore" role="MERN Stack Developer" />
        </div>
      </section>
    </main>
  )
}

export default Index
