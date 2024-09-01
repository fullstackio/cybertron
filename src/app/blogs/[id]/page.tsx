'use client'
import Link from "next/link";
import { useParams } from 'next/navigation';
import axios, { AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";

interface singlePostModel {
  id: string;
  title: string;
  content: string;
  // Add other relevant fields here
}

export default function Blog() {
  const [singlePost, setSinglePost] = useState<singlePostModel | null>(null);
  
  const { id } = useParams();

  const fetchPost = async () => {
    try {
      const postSingleResponse: AxiosResponse = await axios.get(`https://dummyapi.online/api/blogposts/${id}`);
      console.log("My API Data ==> ", postSingleResponse.data);
      setSinglePost(postSingleResponse.data);
    } catch (error) {
      console.log((error as AxiosError).message);
    } finally {
      console.log('Data is loaded.');
    }
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>
      <Link href="/blogs">Back to Blog</Link>
      <h1>Blog Details Page</h1>
      {singlePost ? (
        <div>
          <h2>{singlePost.title}</h2>
          <p>{singlePost.content}</p>
          {/* Render other fields as necessary */}
        </div>
      ) : (
        <p><div className="loader-para"></div></p>
      )}
    </div>
  );
}
