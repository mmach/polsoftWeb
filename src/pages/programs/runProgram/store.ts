import { atom } from 'jotai';

import { WebSocketMessageType } from 'src/types/program/programType';


export const historyAtom = atom<WebSocketMessageType[]>([]);
