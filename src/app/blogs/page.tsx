import { Metadata } from "next";

export const metadata:Metadata = {
    title:'Cybernest | Blog',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function Blog(){
    return(
        <div>
            <h1>Welcome to Blog</h1>
        </div>
    )
}