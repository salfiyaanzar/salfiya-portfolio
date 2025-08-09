import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-3 mb-4 hover:-translate-y-0.5 border-neutral-200 border hover:bg-neutral-50 dark:hover:bg-neutral-900 duration-200 py-4 pl-2 pr-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full pl-2">
              <p className="text-neutral-900 text-lg font-medium dark:text-neutral-100">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>

            </div>
          </Link>
        ))}
    </div>
  )
}
