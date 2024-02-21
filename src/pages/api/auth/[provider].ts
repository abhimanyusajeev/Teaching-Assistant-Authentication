import NextAuth, { SessionOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToMongoDB } from "../../../../lib/mongodb";
import { comparePassword } from "../../../../lib/passwordHashing";
import User from "../../../../models/user";
import { Session } from "next-auth";

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing credentials");
        }

        const { email, password } = credentials;
        await connectToMongoDB();
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("No user found");
        }

        const isValidPassword = comparePassword(password, user.password);

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // Return user data
        return {
          id: user._id.toString(), // Convert ObjectId to string
          email: user.email,
        };
      },
    }),
    // Add more providers as needed (e.g., Google, Facebook, etc.)
  ],
  pages: {
    signIn: "/auth/signin",
  },
  // session: {
  //   jwt: true,
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
