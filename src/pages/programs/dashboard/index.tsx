import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router';

import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';

import { useProgramFacade } from 'src/facade/program/useProgramFacade';

import { ProgramType } from 'src/types/program/programType';

export default function DashboardProgramPage() {
  const { id } = useParams();
  const { refetchList, programs } = useProgramFacade()
  const [values, setValues] = useState<ProgramType>()
  const navigate = useNavigate()
  useEffect(() => {
    const result = programs?.find(i => i.guid === id)
    if (result) {
      setValues(result as ProgramType)
    }
  }, [id, programs])

  return (
    <>
      <Helmet>
        <title>Manage Programs</title>
      </Helmet>
      <Box width={1000} gap={1} padding={2} justifyContent='center' display='flex' height={700} flexDirection='column'>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Typography>{values?.name}</Typography>
          <Box>
            <IconButton onClick={() => navigate(`/programs/${id}/edit`)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.561 5.318l-2.879-2.879A1.495 1.495 0 0 0 17.621 2c-.385 0-.768.146-1.061.439L13 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06M11.5 14.672L9.328 12.5l6.293-6.293l2.172 2.172zm-2.561-1.339l1.756 1.728L9 15zM16 19H5V8h6l-3.18 3.18c-.293.293-.478.812-.629 1.289c-.16.5-.191 1.056-.191 1.47V17h3.061c.414 0 1.108-.1 1.571-.29c.464-.19.896-.347 1.188-.64L16 13zm2.5-11.328L16.328 5.5l1.293-1.293l2.171 2.172z" /></svg>
            </IconButton>
            <IconButton onClick={() => navigate(`/programs/${id}/run`)} color="success" style={{ transform: 'rotate(90deg)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2" /></svg>
            </IconButton>
          </Box>
        </Box>
        <Outlet />
      </Box>
    </>
  );
}
