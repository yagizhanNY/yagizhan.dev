import { Post } from ".prisma/client";
import { PostDto } from "@/app/interfaces/PostDto.interface";
import { appendFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  if (req.method === "POST") {
    const post = JSON.parse(req.body) as PostDto;
    console.log(post);
    const apiResponse = await prisma.post.create({
      data: post.post,
    });

    await appendFile(
      path.join(process.cwd(), "post-files", post.post.fileName),
      post.content
    );
    res.status(201).json(apiResponse);
  }
}
