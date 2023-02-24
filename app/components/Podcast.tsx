import { PodcastInterface } from "../interfaces/Podcast.interface";

export default function Podcast(props: PodcastInterface) {
  return (
    <ul className="py-2">
      <li className="flex items-center justify-between">
        <div className="flex items-center">
          <a href={props.podcastLink} target="_blank" className="mx-auto">
            <p className="italic underline">{props.podcastName}</p>
          </a>
        </div>
      </li>
    </ul>
  );
}
