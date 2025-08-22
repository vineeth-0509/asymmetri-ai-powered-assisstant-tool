import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/db";
import { authConfig } from '../../../../../auth.config';

export const {
    handlers:{GET, POST},
    auth,
} = NextAuth({
    ...authConfig,
    adapter: DrizzleAdapter(db),
    providers:[
        Github,
        Google
    ],
    callbacks:{
        ...authConfig.callbacks,
        async session({session,user}){
            if(session.user){
                session.user.id = user.id;
            }
            return session;
        }
    }
})