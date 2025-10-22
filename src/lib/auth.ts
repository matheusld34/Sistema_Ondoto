import NextAuth from "next-auth"
import prisma from "./prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    trustHost: true,
    providers: [GitHub],
})