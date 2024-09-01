import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
    title:'Cybernest | User Registration',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function ResetPassword(){
    return(
        <div>
            <h1>Welcome to User Reset Password</h1>

            <Link href="/">Back to Home</Link>
            <Link href="/auth/signin">Back to Login</Link>
        </div>
    )
}