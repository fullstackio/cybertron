'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../context/auth";



export default function Logout(){
    const {LogoutUser} = useAuth();
    const router = useRouter()

    useEffect(()=>{
        LogoutUser();
    },[LogoutUser])

    return router.push('/auth/signin');
}