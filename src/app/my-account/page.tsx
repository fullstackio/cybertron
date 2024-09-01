import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Cybernest | About Us',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
} 

export default function MyAccount(){

    return(
        <div>
            <h1>Welcome to My Account</h1>
        </div>
    )
}