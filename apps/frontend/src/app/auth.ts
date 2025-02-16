import { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    async redirect({ url, baseUrl }) {
      if (url === "/login") {
        return `${baseUrl}/users`;
      }
      return url;
    },
  },
}
