import useApiData from "../useApiData"
import PageState from "./PageState"

const PostsPage = () => {
  const { data: posts, isLoading, error } = useApiData("posts")

  return (
    <PageState isLoading={isLoading} error={error}>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Posts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.slice(0, 6).map((post) => (
            <article key={post.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold capitalize text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageState>
  )
}

export default PostsPage
