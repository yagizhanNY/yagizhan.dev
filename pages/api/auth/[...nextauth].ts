import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Yagizhan",
          email: "yagizhanyakali@gmail.com",
        };
        const { username, password } = credentials as any;
        if (
          username === process.env.USER &&
          password === process.env.PASSWORD
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
