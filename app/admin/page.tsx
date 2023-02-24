"use client";

import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";

export default function Admin() {
  const [session, setSession]: any = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getSessionAsync = async () => {
      const currentSession = await getSession();
      setSession(currentSession!);
    };

    getSessionAsync();

    getAllPosts().then((posts: any) => setPosts(posts));
  }, []);

  if (!session) {
    signIn();
    return null;
  }

  return (
    <div>
      <form className="flex flex-col mt-10">
        <h3 className="text-lg font-bold">Create a new Post</h3>
        <input
          className="bg-gray-100 p-2 rounded-md mt-5"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-gray-100 p-2 rounded-md mt-5"
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
      <div className="mt-5">
        {posts.map((post: any) => {
          return (
            <div
              className="flex justify-between items-center p-5 border rounded-md my-2"
              key={post.id}
            >
              <p className="text-lg font-bold">{post.title}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800"
                onClick={async () => await deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

async function createPost(title: string, content: string) {
  const post = {
    title: title,
    fileName: title + ".md",
    published: true,
    content: content,
  };
  const res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
}

async function getAllPosts() {
  const res = await fetch("/api/posts", {
    method: "GET",
  });

  const data = await res.json();

  return data as Post[];
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/posts?id=${id}`, {
    method: "DELETE",
  });
}
