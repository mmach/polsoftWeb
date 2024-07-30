import { Helmet } from 'react-helmet-async';



import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { WorkAPI } from 'src/facade';
import { useProgramFacade } from 'src/facade/program/useProgramFacade';
import { WebsocketContext } from 'src/facade/socket/webSocketContext';
import ProgramView from 'src/sections/programs/program-view';
import { WebSocketMessageType, WorkType } from 'src/types/program/programType';
import { historyAtom } from './store';

export default function RunProgram() {
  const { id } = useParams();
  const { programs } = useProgramFacade()
  const [currentRun, setCurrentRun] = useState<WorkType | undefined>()
  const [historyList] = useAtom<WebSocketMessageType[]>(historyAtom)
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

  if (!currentRun) return <CircularProgress />

  return currentRun && (
    <>
      <Helmet>
        <title>Run Program</title>
      </Helmet>
      <Box width={1000} gap={1} padding={2} justifyContent='center' display='flex' minHeight={700} flexDirection='column'>
        <WebsocketContext workId={currentRun.id}>
          <ProgramView />
          <Terminal name='Program Output' colorMode={ColorMode.Dark} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
            {historyList.map(i => <TerminalOutput>{i.Output}</TerminalOutput>)}
          </Terminal>
        </WebsocketContext>
      </Box>
    </>
  );
}
