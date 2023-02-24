import { marked } from "marked";
import { prisma } from "../../../prisma/client";

interface PageProps {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PageProps) {
  if (params.id) {
    const post = await prisma.post.findFirst({
      where: {
        id: params.id.toString(),
      },
    });

    if (post) {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">{post?.title}</h2>
          <p className="mt-2 text-gray-400">
            {post?.createdAt.toString().substring(4, 15)}
          </p>
          <article
            className="mt-5 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: marked(post!.content) }}
          ></article>
        </div>
      );
    } else {
      return <h1>Nothing to show</h1>;
    }
  } else {
    return <h1>Nothing to show</h1>;
  }
}
