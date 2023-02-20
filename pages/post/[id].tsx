import { getPostByFileName } from "@/app/services/fetchPostsService";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "../../prisma/client";
import Layout from "../../app/layout";
import { useEffect, useState } from "react";

export default function PostDetailsPage({ post }: any) {
  const [innerHtml, setInnerHtml] = useState("");
  useEffect(() => {
    console.log("POST CONTENT: ", post.content);
    setInnerHtml(post.content);
  }, [post]);

  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
        <p>{post.createdAt.toString().substring(4, 15)}</p>
        <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const post = await prisma.post.findFirst({
    where: {
      id: Number(id),
    },
  });

  const fileDetails = await getPostByFileName(post!.fileName);

  return {
    props: {
      post: {
        ...post,
        createdAt: post?.createdAt.toString(),
        updatedAt: post?.updatedAt.toString(),
        content: fileDetails?.content,
      },
    },
  };
};
