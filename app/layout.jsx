import Nav from "./components/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav></Nav>
        <div className="mx-4 md:mx-24 xl:mx-64">{children}</div>
      </body>
    </html>
  );
}
