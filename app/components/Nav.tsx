import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [session, setSession]: any = useState({});
  useEffect(() => {
    const getSessionAsync = async () => {
      const currentSession = await getSession();
      setSession(currentSession!);
    };

    getSessionAsync();
  }, []);

  return (
    <nav className="w-full">
      <div className="flex justify-between p-8 items-center">
        <Link href={"/"} className="font-bold text-lg text-gray-700">
          Yagizhan Necat YAKALI
        </Link>
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
          {session?.user && (
            <li>
              <Link onClick={() => signOut()} href={"#"}>
                Log out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
