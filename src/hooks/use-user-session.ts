import { useState, useEffect } from "react";

export function useUserSession() {
    const [isUserLogged, setIsUserLogged] = useState(!!localStorage.getItem('token'));

    const checkUserLogged = () => {
        const userToken = localStorage.getItem('token');
        
        setIsUserLogged(!!userToken);
    }

    useEffect(checkUserLogged, []);

    useEffect(() => {
        window.addEventListener('storage', checkUserLogged)

        return () => {
            window.removeEventListener('storage', checkUserLogged)
        }
    })

    return { isUserLogged }
}