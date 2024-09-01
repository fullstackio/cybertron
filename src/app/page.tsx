
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {Button} from "@nextui-org/react";

export const metadata: Metadata = {
    title:'Cybernest | Welcome to next generation web application',
    description:'This is the about page of Your Website Name. Learn more about us and what we do.',
    keywords:'about, your website, company, information'
}


export default function Home() {
  return (
    <div >
      <div className="p-10">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/images/next.svg"
          alt="Next.js Logo"
          width={190}
          height={37}
          priority
        />
      </div>
      
      <h1>Home page</h1>

      <div className="flex gap-4 items-center">
      <Button size="sm">
        Small
      </Button>  
      <Button size="md">
        Medium
      </Button>  
      <Button size="lg">
        Large
      </Button>  
    </div>
    </div>
  );
}
