import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { user } from "@/repository/user"; // Replace with your actual user retrieval logic
import { NextAuthOptions } from "next-auth";
const secret = process.env.NEXTAUTH_SECRET;

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Use JWT for sessions
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name; // Add user name to the token
      }
      return token; // Return the updated token
    },
    async session({ session, token }) {
      if (token) {
        session.user = { name: token.name }; // Add user details to the session
      }
      return session; // Return the updated session
    },
  },
  pages: {
    signIn: "/", // Redirect to your custom login page
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Record<"username" | "password", string> | undefined
      ): Promise<any> => {
        const { username, password }: any = credentials;

        if (user && user.username === username) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  secret,
};


export default authOptions;