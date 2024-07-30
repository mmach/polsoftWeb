import { useMemo } from 'react';
import '@xyflow/react/dist/style.css';
import { useParams } from 'react-router';

import { Grid } from '@mui/material';

import { useProgramFacade } from 'src/facade/program/useProgramFacade';

import { Diagram } from './diagram/Diagram';

export default function ProgramView() {
  const { id } = useParams();
  const { programs } = useProgramFacade();

  const programID = useMemo<number | undefined>(() => programs?.find((program) => program.guid === id)?.id, [programs, id]);

  // TODO: Error Page
  if (!programID) {
    return null;
  }

  return (
    <Grid container columnSpacing={3} alignItems="center" sx={{ height: '420px' }}>
      <Grid item xs={12} sx={{ height: '420px' }}>
        <Diagram programID={programID} />
      </Grid>
    </Grid>
  );
}
