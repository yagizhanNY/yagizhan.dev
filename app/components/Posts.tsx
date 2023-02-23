import { Post } from ".prisma/client";
import Link from "next/link";

interface PageProps {
  posts: Post[];
}

export default async function Posts({ posts }: PageProps) {
  return (
    <div className="flex flex-col w-full justify-center max-w-xl">
      <p className="my-2 text-gray-400">Posts</p>
      {posts.map((post) => {
        return (
          <div className="my-2">
            <Link
              key={post.id}
              href={`/post/${post?.id}`}
              className="text-lg font-bold mb-2"
            >
              {post?.title}
            </Link>
            <p className="mt-2 text-gray-400">
              {new Date(post?.createdAt).toString().substring(4, 16)}
            </p>
          </div>
        );
      })}
      <hr className="my-10" />
    </div>
  );
}
