import { MusicInterface } from "../interfaces/Music.interface";

export default function Music({
  publishedDate,
  trackName,
  trackLink,
  icon,
}: MusicInterface) {
  return (
    <ul className="py-2">
      <li className="flex items-center">
        <div className="flex">
          <p className="text-sm text-gray-400 mr-2 w-24">{publishedDate}</p>
          <a href={trackLink} target="_blank" className="mx-auto">
            <p className="italic underline">{trackName}</p>
          </a>
        </div>

        {/* <div className="flex items-center gap-4">
          <a href={trackLink} target="_blank">
            <img
              className="rounded-full"
              width={32}
              height={32}
              src={`icons/${icon}.png`}
              alt="soundcloud"
            />
          </a>
        </div> */}
      </li>
    </ul>
  );
}
