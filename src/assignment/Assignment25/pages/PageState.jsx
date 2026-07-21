const PageState = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center text-slate-600 shadow-sm" role="status">
        Fetching API data...
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700" role="alert">
        Unable to load data: {error}
      </div>
    )
  }

  return children
}

export default PageState
