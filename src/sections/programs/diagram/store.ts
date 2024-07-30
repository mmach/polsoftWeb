import { atom } from 'jotai';
import { Node, Edge } from '@xyflow/react';

import { APIProgramStep } from 'src/features/programs/queries/useGetProgramStepsQuery';

export const nodesAtom = atom<Node[]>([
  {
    id: '1',
    type: 'step',
    position: {
      x: 0,
      y: 0,
    },
    data: {},
  },
]);

export const edgesAtom = atom<Edge[]>([]);

export const previewCodeAtom = atom<APIProgramStep | null>(null);

export const currentStepAtom = atom<string | null>(null);
