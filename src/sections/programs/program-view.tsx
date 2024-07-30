import '@xyflow/react/dist/style.css';
import { Grid } from '@mui/material';
import { Diagram } from './diagram/Diagram';
import { useParams } from 'react-router';
import { useProgramFacade } from 'src/facade/program/useProgramFacade';
import { useMemo } from 'react';

export default function ProgramView() {
  const { id } = useParams();
  const { programs } = useProgramFacade();

  const programID = useMemo<number | undefined>(() => {
    return programs.find((program) => program.guid === id)?.id;
  }, [programs, id]);

  return (
    <Grid container columnSpacing={3} alignItems="center" sx={{ height: '420px' }}>
      <Grid item xs={12} sx={{ height: '420px' }}>
        <Diagram />
      </Grid>
    </Grid>
  );
}
