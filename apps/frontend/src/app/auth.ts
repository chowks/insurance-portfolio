import { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
}