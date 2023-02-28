import Image from "next/image";
import Link from "next/link";

export default function Libraries() {
  return (
    <div className="flex flex-col w-full justify-center max-w-xl">
      <p className="mb-4 text-gray-400">Published Libraries</p>
      <h3 className="text-lg font-bold mb-2">NPM</h3>
      <Link
        className="italic w-48 md:w-full underline"
        href={"https://www.npmjs.com/package/node-network-scan"}
      >
        node-network-scan
      </Link>
      <p className="text-sm mt-1 text-gray-400 italic">
        Scan the local network and find available devices with this light weight
        NodeJS library. To contribute this library please follow the{" "}
        <Link
          className="underline italic"
          href={"https://github.com/yagizhanNY/network-scanner"}
        >
          link.
        </Link>
      </p>

      <hr className="my-5" />
    </div>
  );
}
