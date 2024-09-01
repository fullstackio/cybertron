import Link from "next/link";

export default function Custom404() {
    return (
      <div className="notFoundPageWrapper">
        <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
        <Link href="/">Go back to the homepage</Link>
        </div>
        
      </div>
    
  )
}