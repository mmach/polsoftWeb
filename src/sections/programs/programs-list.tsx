import { useNavigate } from 'react-router';

import { Box, Stack } from '@mui/system';
import { Card, IconButton, Typography } from '@mui/material';

import { useProgramFacade } from 'src/facade/program/useProgramFacade';

import { MegaMenuDesktopVertical } from 'src/components/mega-menu';

export default function ProgramsList() {
  const { programs, isListFatched } = useProgramFacade();
  const navigate = useNavigate()

  if (!isListFatched) return <></>

  const NAV_ITEMS = programs?.map(p => ({
    title: p.name,
    path: `/programs/${p.guid}`,
  }));

  return (
    <Stack direction="row" spacing={3} mt={5}>
      <Card sx={{ width: 260, flexShrink: 0, overflow: 'unset', zIndex: 9 }}>
        <Box display='ruby' flexDirection='row' justifyContent='space-between'>
          <Typography variant="h6" sx={{ p: 2 }}>
            My Projects
          </Typography>
          <IconButton onClick={() => navigate(`/programs/create`)} color="success" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
          </IconButton>
        </Box>
        <MegaMenuDesktopVertical data={NAV_ITEMS} />
      </Card>
    </Stack>
  );
}
