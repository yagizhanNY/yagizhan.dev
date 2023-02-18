import { prisma } from "../../prisma/client";

export default async function PostDetailsPage() {
  return (
    <h1>Test</h1>
  );
}

export const getStaticPaths = async () => {
  const posts = await prisma.post.findMany();

  const paths = posts.map((p) => {
    return {
      params: { id: p.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const post = await prisma.post.findFirst({
    where: {
      id: Number(id),
    },
  });
  console.log(post);
  return {
    props: {
      post: {
        ...post,
        createdAt: post?.createdAt.toString(),
        updatedAt: post?.updatedAt.toString(),
      },
    },
  };
};
