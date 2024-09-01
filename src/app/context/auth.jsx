import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setToken(localStorage.getItem('authToken'));
        }
    }, []);

    const storetokenInLS = (serverToken) => {
        if (typeof window !== "undefined") {
            localStorage.setItem('authToken', serverToken);
            setToken(serverToken);
        }
    };

    const isLogginedIn = !!token;

    const LogoutUser = () => {
        console.log('Logout function clicked!');
        if (typeof window !== "undefined") {
            localStorage.removeItem('authToken');
            setToken(null);
        }
    }

    return (
        <AuthContext.Provider value={{ storetokenInLS, LogoutUser, isLogginedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return authContextValue;
}
