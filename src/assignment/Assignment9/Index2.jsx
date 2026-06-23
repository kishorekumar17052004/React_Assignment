import DisplayComponent from "./DisplayComponent";
import withIteration from "../../hoc/withIteration";

const EnhancedDisplay = withIteration(DisplayComponent);

const Index2 = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <section className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Assignment 9 · Task 2
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Number Iteration HOC
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter a number and a CSS color to generate a colored sequence.
          </p>
        </div>

        <div className="space-y-4 [&>input]:w-full [&>input]:rounded-xl [&>input]:border [&>input]:border-slate-300 [&>input]:px-4 [&>input]:py-3 [&>input]:text-slate-900 [&>input]:outline-none [&>input]:transition [&>input]:placeholder:text-slate-400 [&>input]:focus:border-indigo-500 [&>input]:focus:ring-4 [&>input]:focus:ring-indigo-100">
          <EnhancedDisplay />
        </div>
      </section>
    </main>
  );
};

export default Index2;
