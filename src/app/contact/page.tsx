import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Cybernest | About Us',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function Contact(){

    return(
        <div className="w-full m-auto max-w-screen-2xl">
            <h1>Welcome to Contact</h1>
        </div>
    )
}