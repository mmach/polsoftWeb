import { atom } from 'jotai';
import { Node, Edge } from '@xyflow/react';

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

type PreviewCodeProps = {
  ID: string;
  code: string;
};

export const previewCode = atom<PreviewCodeProps | null>(null);
