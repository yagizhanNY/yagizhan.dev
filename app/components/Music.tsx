import { MusicInterface } from "../interfaces/Music.interface";

export default function Music({
  publishedDate,
  trackName,
  trackLink,
  icon,
}: MusicInterface) {
  return (
    <ul className="py-2">
      <li className="flex items-center justify-between">
        <div className="flex items-center max-w-md">
          <p className="text-sm text-gray-400 mr-2">{publishedDate}</p>
          <p className="text-lg italic">{trackName}</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={trackLink} target="_blank">
            <img
              className="rounded-md "
              width={32}
              height={32}
              src={`icons/${icon}.png`}
              alt="soundcloud"
            />
          </a>
        </div>
      </li>
    </ul>
  );
}
