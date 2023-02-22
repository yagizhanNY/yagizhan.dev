import Nav from "./components/Nav";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-4 md:mx-48 xl:mx-96">
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
