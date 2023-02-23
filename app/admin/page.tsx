"use client";

import { Post } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
// import useSWR from "swr";
import { prisma } from "../../prisma/client";

export default function Admin() {
  const [session, setSession]: any = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const getSessionAsync = async () => {
      const currentSession = await getSession();
      setSession(currentSession!);
    };

    getSessionAsync();
  }, []);

  if (!session) {
    signIn();
    return null;
  }

  return (
    <form className="flex flex-col mt-10">
      <h3 className="text-lg font-bold">Create a new Post</h3>
      <input
        className="bg-gray-200 p-2 rounded-md mt-5"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="bg-gray-200 p-2 rounded-md mt-5"
        placeholder="Content"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="bg-gray-200 p-2 rounded-md w-32 mt-5 hover:bg-gray-600 hover:text-white"
        type="submit"
        onClick={() => createPost(title, content)}
      >
        Create Post
      </button>
    </form>
  );
}

async function createPost(title: string, content: string) {
  const postDto = {
    post: {
      title: title,
      fileName: title + ".md",
      published: true,
    },
    content: content,
  };
  const res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(postDto),
  });
}
