import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
    title:'Cybernest | User Login',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function Login(){
    return(
        <div>
            <h1>Welcome to login</h1>

            <Link href="/">Back to Home</Link>
        </div>
    )
}