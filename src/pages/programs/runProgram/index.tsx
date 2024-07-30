import { useAtom } from 'jotai';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

import { WorkAPI } from 'src/facade';
import { WebsocketContext } from 'src/facade/socket/webSocketContext';
import { useProgramFacade } from 'src/facade/program/useProgramFacade';

import Typewriter from 'src/components/typewriter';

import ProgramView from 'src/sections/programs/program-view';

import { WorkType, WebSocketMessageType } from 'src/types/program/programType';

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
            {historyList.map(i => <TerminalOutput key={i.Id}><Typewriter text={i.Output} delay={2} /></TerminalOutput>)}
          </Terminal>
        </WebsocketContext>
      </Box>
    </>
  );
}
