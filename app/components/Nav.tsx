import Link from "next/link";
import { getPosts } from "../services/fetchPostsService";

export default async function Nav() {
  return (
    <nav className="w-full">
      <div className="flex justify-between p-8 items-center">
        <h2 className="font-bold text-lg text-gray-700">
          Yagizhan Necat YAKALI
        </h2>
        <ul className="flex gap-6">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/resume"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/journey"}>Journey</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
