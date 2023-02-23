import { Post } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  if (req.method === "POST") {
    const post = JSON.parse(req.body) as Post;
    const apiResponse = await prisma.post.create({
      data: post,
    });

    res.status(201).json(apiResponse);
  }
}
