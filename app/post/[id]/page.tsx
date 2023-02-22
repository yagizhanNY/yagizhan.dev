import { getPostByFileName } from "@/app/services/fetchPostsService";
import { prisma } from "../../../prisma/client";

interface PageProps {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PageProps) {
  if (params.id) {
    console.log("ID: ", typeof Number(params.id));
    const post = await prisma.post.findFirst({
      where: {
        id: params.id.toString(),
      },
    });

    if (post) {
      const fileDetails = await getPostByFileName(post!.fileName);
      return (
        <div className="flex flex-col items-center">
          <h2>{post?.title}</h2>
          <p className="mt-2 text-gray-400">
            {post?.createdAt.toString().substring(4, 15)}
          </p>
          <article
            className="mt-5 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: fileDetails!.content }}
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
