import Link from "next/link";
import { prisma } from "../../prisma/client";

export default async function LatestPost() {
  const getLatestPostFileName = async () => {
    return await prisma.post.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
  };

  const latestPost = await getLatestPostFileName();

  return (
    <div className="flex flex-col w-full justify-center max-w-xl">
      <p className="my-2 text-gray-400">Latest Post</p>
      <Link href={`/post/${latestPost?.id}`} className="text-lg font-bold mb-2">
        {latestPost?.title}
      </Link>
      <p className="mt-2 text-gray-400">
        {latestPost?.createdAt.toString().substring(4, 16)}
      </p>
      <hr className="my-10" />
    </div>
  );
}
