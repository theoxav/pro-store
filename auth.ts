import NextAuth, { NextAuthConfig } from 'next-auth';
import prisma from './lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        //Find user in the db
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) return null;

        //Check if password is correct
        const passwordsMatch = compareSync(
          credentials.password as string,
          user.password as string
        );
        if (!passwordsMatch) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      // IF THERE IS AN UPDATE, SET THE USER NAME
      if (trigger === 'update') {
        session.user.name = user.name;
      }

      return session;
    },
    async jwt({ token, user, trigger, session }: any) {
      // Asign user fields to the token
      if (user) {
        token.role = user.role;

        // If user has no name use email
        if (user.name === 'NO_NAME') {
          token.name = user.email!.split('@')[0];
        }

        // Update the database to reflect the token name
        await prisma.user.update({
          where: { id: user.id },
          data: { name: token.name },
        });
      }
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
