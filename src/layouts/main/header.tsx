import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useUserSession } from 'src/hooks/use-user-session';
import { useNavigationConfig } from 'src/hooks/use-navigation-config';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const navigate = useNavigate();
  const { isUserLogged } = useUserSession();
  const { navConfig } = useNavigationConfig();

  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />

        <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener" />
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {mdUp && <NavDesktop data={navConfig} />}</Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      {!isUserLogged && (<Button
        variant="contained"
        color="inherit"
        onClick={() => {
          navigate('/auth/login');
        }}
        rel="noopener"
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
        }}
      >
        Login
      </Button>)}

      {isUserLogged && (<Button
        variant="contained"
        color="inherit"
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/')
        }}
        rel="noopener"
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
        }}
      >
        <Iconify icon="carbon:logout" />
        Logout
      </Button>)}

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
