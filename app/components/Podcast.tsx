"use client";

import { PodcastInterface } from "../interfaces/Podcast.interface";

export default function Podcast(props: PodcastInterface) {
  return (
    <ul className="py-2">
      <li className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg italic">{props.podcastName}</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={props.podcastLink} target="_blank">
            <img
              className="rounded-md "
              width={32}
              height={32}
              src={`icons/${props.icon}.png`}
              alt="soundcloud"
            />
          </a>
        </div>
      </li>
    </ul>
  );
}
