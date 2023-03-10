import Link from "next/link";

export default function Libraries() {
  return (
    <div className="flex flex-col w-full justify-center max-w-xl">
      <p className="mb-4 text-gray-400">Published Libraries</p>
      <h3 className="text-lg font-bold my-2">NPM</h3>
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
          href={"https://github.com/yagizhanNY/node-network-scanner"}
        >
          link.
        </Link>
      </p>
      <h3 className="text-lg font-bold my-2">Nuget</h3>
      <Link
        className="italic w-48 md:w-full underline"
        href={"https://www.nuget.org/packages/NetworkScanner/"}
      >
        NetworkScanner
      </Link>
      <p className="text-sm mt-1 text-gray-400 italic">
        Light weight library for scan the local network fastly. To contribute
        this library please follow the{" "}
        <Link
          className="underline italic"
          href={"https://github.com/yagizhanNY/net-network-scanner"}
        >
          link.
        </Link>
      </p>
      <Link
        className="italic w-48 md:w-full underline mt-1"
        href={"https://www.nuget.org/packages/SiemensIXBlazor"}
      >
        SiemensIXBlazor
      </Link>
      <p className="text-sm mt-1 text-gray-400 italic">
        Siemens IX library port for Blazor applications. To contribute this
        library please follow the{" "}
        <Link
          className="underline italic"
          href={"https://github.com/yagizhanNY/siemens-ix-blazor"}
        >
          link.
        </Link>
      </p>

      <hr className="my-5" />
    </div>
  );
}
