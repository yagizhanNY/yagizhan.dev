import { MusicInterface } from "../interfaces/Music.interface";

export default function Music({
  publishedDate,
  trackName,
  trackLink,
}: MusicInterface) {
  return (
    <ul className="py-2">
      <li className="flex items-center">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400 mr-2 w-24">{publishedDate}</p>
          <a href={trackLink} target="_blank" className="mx-auto">
            <p className="italic w-48 md:w-full underline">{trackName}</p>
          </a>
        </div>
      </li>
    </ul>
  );
}
