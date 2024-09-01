'use client'
import axios,{AxiosResponse,AxiosError} from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect,useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Head from "next/head";
import Image from "next/image";
import {Skeleton} from "@nextui-org/skeleton";

// export const metadata:Metadata = {
//     title:'Cybernest | Blog',
//     description:'This is the about page of Your Website Name. Learn more about us and what we do.',
//     keywords:'about, your website, company, information'
// } 

export default function Blog(){

    const [getPosts,setPosts] = useState([]);
    const [mtLoading,setMtLoading] = useState(false);
    const [apiError,setApiError] = useState('');

    const fetchPosts = async () =>{
        setMtLoading(true);
        try {

            const postResponce: AxiosResponse = await axios.get('https://dummyapi.online/api/blogposts');
            console.log("My Blog API Data ==> ",postResponce.data);
            setPosts(postResponce.data);

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
                <title>Cybernest | Blog</title>
                <meta name="description" content="This is the blog page of Cybernest. Learn more about our blog and what we do." />
                <meta name="keywords" content="blog, cybernest, articles, information" />
            </Head>
           
            <div className="page-banner-wrapper">
            <h1>Welcome to Blog</h1>
            </div>
                  
          
            {mtLoading && (
                <div>
                     <div className="flex flex-row flex-wrap">
            <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[33.33%] space-y-5 p-4 mb-8" >
                    <Skeleton className="rounded-lg">
                        <div className="h-56 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="max-w-[33.33%] my-2.5 w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12"/>
                        </div>  
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg"/>
                            <Skeleton className="h-3 w-4/5 rounded-lg"/>
                        </div>
                        </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">  
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
             </div>
                </div>
            )}
            {apiError !== "" ? (<><h3>{apiError}</h3></>):(<>
                {getPosts.length === 0 && !mtLoading &&  (
                <div>No data found</div>
            )}
            </>)}

            <div className="flex flex-row flex-wrap">

            {getPosts.length > 0 && (
                getPosts.map((post,id)=>{
                    const header = (
                        <div className="postThumbnailwrapper">
                                                    <Link href={`blogs/${post.id}`}>
                                                    <Image
                          className=""
                          src="/assets/images/noImage_blog.png"
                          alt="Noimage Blog Banner"
                          width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%'}}
                          priority
                        />
                                                    </Link>
                                                </div>
                    );

                    return(
                        <div className="px-5 mb-10 basis-1/3" key={id}>
                            

                            
                            <Card title={post.title} subTitle="Card subtitle" className="h-full md:w-full" header={header}>
                                
    <p className="m-0">
       
        {trimContent(post.content,60)}
    </p>
    <Link href={`blogs/${post.id}`} className="p-button p-component p-button-icon-only"  >Show Details</Link>
    
</Card>
                        </div>
                    )
                })
            )}
            </div>
            

            
        </div>
    )
}