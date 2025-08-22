import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/db";

export const {
    handlers:{GET, POST},
    auth,
} = NextAuth({
    adapter: DrizzleAdapter(db),
    providers:[
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks:{
        async session({session,user}){
            if(session.user){
                session.user.id = user.id;
            }
            return session;
        }
    }
})