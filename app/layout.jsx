"use client"
import Nav from "./components/Nav";
import "./globals.css";
import {SessionProvider} from 'next-auth/react'

export default function RootLayout({
  children,
  session
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-4 md:mx-48 xl:mx-96">
        
      <Nav></Nav>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      
      </body>
    </html>
  );
}
