import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session : {
        strategy: "jwt",
    },
    providers : [
        CredentialsProvider({
            credentials : {
                Email: {label : 'Email', type: 'text', require: true, placeholder: 'Enter your Email'},
                password: {label : 'Password', type: 'password', require: true, placeholder: 'Enter your passwords'},
            },

            async authorize (credentials){
                if(!credentials){
                    return null;
                }
                return true;
            }
        })
    ],
    pages: [

    ]
})

export {handler as GET, handler as POST}