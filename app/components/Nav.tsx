"use client";

import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

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
      <div className="flex justify-between p-4 md:p-8 items-center mx-auto">
        <Link href={"/"} className="font-bold text-sm lg:text-lg text-gray-700">
          <MobileView>YNY</MobileView>
          <BrowserView>Yagizhan Necat YAKALI</BrowserView>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link target="_blank" href={"https://github.com/yagizhanNY"}>
              Portfolio
            </Link>
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
