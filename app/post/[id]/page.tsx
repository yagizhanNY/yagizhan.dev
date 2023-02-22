import { getPostByFileName } from "@/app/services/fetchPostsService";
import { readFile } from "fs/promises";
import path from "path";
import { prisma } from "../../../prisma/client";

interface PageProps {
  params: {
    id: number;
  };
}

export default async function About({ params }: PageProps) {
  const post = await prisma.post.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  // const postDetails = await readFile(path.join(process.cwd(), 'post-files', post!.fileName));

  const fileDetails = await getPostByFileName(post!.fileName);
  console.log(fileDetails);
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
}
