'use client'
import axios,{AxiosResponse,AxiosError} from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect,useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Head from "next/head";

// export const metadata:Metadata = {
//     title:'Cybernest | Blog',
//     description:'This is the about page of Your Website Name. Learn more about us and what we do.',
//     keywords:'about, your website, company, information'
// } 

export default function Users(){

    const [getPosts,setPosts] = useState([]);
    const [mtLoading,setMtLoading] = useState(false);
    const [apiError,setApiError] = useState('');

    const fetchPosts = async () =>{
        setMtLoading(true);
        try {
        
                const postResponce: AxiosResponse = await axios.get('http://localhost:3006/users');
                console.log("My Users API Data ==> ",postResponce.data.data);
                setPosts(postResponce.data.data);
            
            

        } catch (error) {
            console.log(error.message);
            setApiError(error.message)
        } finally{
            setMtLoading(false);
        }
    }

    useEffect(()=>{
        fetchPosts();
    },[]);


    const trimContent = (content: string, maxLength: number) => {
        if (content.length <= maxLength) {
          return content;
        }
        return content.substring(0, maxLength) + '...';
      };

    return(
        <div className="w-full m-auto max-w-screen-2xl">
            <Head>
                <title>Cybernest | Users</title>
                <meta name="description" content="This is the blog page of Cybernest. Learn more about our blog and what we do." />
                <meta name="keywords" content="blog, cybernest, articles, information" />
            </Head>
           
            <div className="page-banner-wrapper">
            <h1>Welcome to User listing page</h1>

                
            </div>
            <div className="user_page_header">
                <div className="user_header_row">
                    <div className="search_user">
                        <input type="text" placeholder="Search User by Name, Email Id, Department" className="search_user_input" />
                    </div>
                    <div className="add_user">
                        <Link href="/users/add" className="add_user_btn">Add User</Link>
                    </div>
                </div>
            </div>
            <div className="user_wrappr_row">
                {getPosts.map((user,id)=>{
                    return(
                        <>
                            <div className="user_wrappr_col" key={id}>
                                <div className="user_pro_box">
                                    <h1>{user.userFirstName} {user.userLastName}</h1>
                                    <h6><a href="mailto:`${user.userEmail}`">{user.userEmail}</a></h6>
                                </div>
                            </div>
                        </>
                    )
                })}
        
            </div>
            

          
           

            
            

            
        </div>
    )
}