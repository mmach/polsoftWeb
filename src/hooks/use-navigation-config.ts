import { useState, useEffect } from "react";

import { useUserSession } from "./use-user-session";

type NavConfiguration = {
    title: string;
    path: string;
}

export const useNavigationConfig = () => {
    const { isUserLogged } = useUserSession();
    const [navConfig, setNavConfig] = useState<NavConfiguration[]>([]);
    const pageLinks: string[] = [];

    useEffect(() => {
        const navConfigArray = [{ title: 'Home', path: '/' }];
        if (isUserLogged) navConfigArray.push({ title: 'Programs', path: '/programs' });

        setNavConfig(navConfigArray);
    }, [isUserLogged]);


    return { pageLinks, navConfig }
}