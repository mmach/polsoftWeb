import { atom } from 'jotai';
import { Node, Edge } from '@xyflow/react';

import { APIProgramStep } from 'src/features/programs/queries/useGetProgramStepsQuery';
import { WebSocketMessageType } from 'src/types/program/programType';


export const historyAtom = atom<WebSocketMessageType[]>([]);
