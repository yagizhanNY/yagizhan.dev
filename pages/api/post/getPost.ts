import { getPostByFileName } from "@/app/services/fetchPostsService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const { fileName } = req.query;
    const post = await getPostByFileName(fileName as string);
    console.log(post);
    res.status(200).json({ name: post?.content });
  }
}
