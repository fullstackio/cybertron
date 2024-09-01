'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import './header.css';
import { useTheme } from "../../../context/ThemeContext";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import dark from "/assets/images/moon.png";
import light from "/assets/images/sun.png";
import {useAuth} from "../../../context/auth";

export default function Header() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const {isLogginedIn} = useAuth();

   console.log('Login Status',isLogginedIn)

    return (
        <header>
            <div className="header-container">
                <div className="header-row">
                    <div className="site-header-logo">
                        <Link href="/">Cybertron</Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                            </li>
                            <li>
                                <Link href="/blogs" className={pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
                            </li>
                            <li>
                                <Link href="/users" className={pathname === '/users' ? 'active' : ''}>Users</Link>
                            </li>
                            <li>
                                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                            </li>
                           {isLogginedIn ? <>
                            <li>
                                <Link href="/my-account" className={pathname === '/my-account' ? 'active' : ''}>My Account</Link>
                            </li>
                        
                            
                            <li>
                                   
                                    <Link href="/logout" >Logout</Link>
                            </li>
                           </>:<>
                            <li>
                                <Link href="/auth/signin" className={pathname === '/auth/signin' ? 'active' : ''}>Login</Link>
                            </li>
                           </>}
                            
                        

                           
                               
                          
                        </ul>
                    </nav>
                    
                    <div className="widget_area">
                        
                        <button onClick={toggleTheme} className={theme === 'light' ? 'darkModeBtn' : 'lightModeBtn'}>
                            {theme === 'light' ? (
                                <Image
                                    className=""
                                    src="/assets/images/moon.png"
                                    alt="Next.js Logo"
                                    width={25}
                                    height={25}
                                    priority
                                />
                            ) : (
                                <Image
                                    className=""
                                    src="/assets/images/sun.png"
                                    alt="Next.js Logo"
                                    width={25}
                                    height={25}
                                    priority
                                />
                            )}
                        </button>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}
