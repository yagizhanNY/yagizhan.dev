import Nav from "./components/Nav";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
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
