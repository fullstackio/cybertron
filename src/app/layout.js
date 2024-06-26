'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./global/modules/header/layout";
import { usePathname } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const routerPathName = usePathname();
  console.log(routerPathName);

  const noHeaderCheck = routerPathName !== '/login' && routerPathName !== '/register' && routerPathName !== '/reset-password' && routerPathName !== '/mt-admin/login';

  return (
    <html lang="en">
      <body className={inter.className}>

        { noHeaderCheck ?(<Header/>):(null)}
        
        {children}
        
      </body>
    </html>
  );
}
