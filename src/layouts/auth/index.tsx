import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box, { BoxProps } from '@mui/material/Box';

import { HEADER } from '../config-layout';
import Header from '../common/header-simple';

// ----------------------------------------------------------------------

type Props = BoxProps & {
    children: React.ReactNode;
    headerOnDark?: boolean;
    disabledSpacing?: boolean;
};

export default function AuthLayout({
    children,
    headerOnDark = false,
    disabledSpacing = false,
    sx,
    ...other
}: Props) {

    const navigate = useNavigate();

    const checkUserLogged = () => {
        const userToken = localStorage.getItem('token')

        if (!userToken) {
            navigate('/');
        }
    }

    useEffect(checkUserLogged, [navigate]);

    useEffect(() => {
        window.addEventListener('storage', checkUserLogged)

        return () => {
            window.removeEventListener('storage', checkUserLogged)
        }
    })

    return (
        <Box
            sx={{
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                ...sx,
            }}
            {...other}
        >
            <Header />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {!(disabledSpacing || headerOnDark) && (
                    <Box
                        sx={{
                            height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
                        }}
                    />
                )}

                {children}
            </Box>
        </Box>
    );
}