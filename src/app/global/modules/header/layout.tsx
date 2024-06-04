'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){

    const pathname = usePathname();
    return(
        <header>
          <div className="header-container">
            <div className="header-row">
                <div className="site-header-logo">
                    Logo
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/" className={pathname === '/'? 'active':''}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={pathname === '/about'? 'active':''}>About</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className={pathname === '/blogs'? 'active':''}>Blogs</Link>
                        </li>
                        <li>
                            <Link href="/login"  className={pathname === '/login'? 'active':''}>Login</Link>
                        </li>
                        <li>
                            <Link href="/mt-admin/login"  className={pathname === '/mt-admin/login'? 'active':''}>Master Admin Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </header>
       )
}