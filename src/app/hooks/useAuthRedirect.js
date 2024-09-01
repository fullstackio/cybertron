// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export function useAuthRedirect() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('authtoken');
//     if (token) {
//       setIsLoggedIn(true);
//       router.push('/'); // Redirect to home or account page if logged in
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [router]);

//   return isLoggedIn;
// }
