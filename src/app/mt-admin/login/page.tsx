import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
    title:'Cybernest | Mt Admin Login',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function MTLogin(){
    return(
        <div>
            <h1>Welcome to Mt login</h1>

            <Link href="/">Back to Home</Link>
        </div>
    )
}