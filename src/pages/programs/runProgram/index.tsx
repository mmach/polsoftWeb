import { Helmet } from 'react-helmet-async';



import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { WorkAPI } from 'src/facade';
import { useProgramFacade } from 'src/facade/program/useProgramFacade';
import { WebsocketContext } from 'src/facade/socket/webSocketContext';
import { WorkType } from 'src/types/program/programType';

export default function RunProgram() {
  const { id } = useParams();
  const { programs } = useProgramFacade()
  const [currentRun, setCurrentRun] = useState<WorkType | undefined>()
  useEffect(() => {
    const result = programs?.find(i => i.guid === id)
    if (result) {
      initFunction(result.id);
    }
  }, [id, programs])

  const initFunction = async (progarmId: number) => {
    const result = await WorkAPI.TriggerWorkStart(progarmId);
    setCurrentRun(result.data)
  }

  return currentRun && (
    <>
      <Helmet>
        <title>Run Program</title>
      </Helmet>
      <Box width={1000} gap={1} padding={2} justifyContent='center' display='flex' height={700} flexDirection='column'>
        <WebsocketContext workId={currentRun.id}>
          <></>
        </WebsocketContext>
      </Box>
    </>
  );
}
