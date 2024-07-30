import React from 'react';
import { ReactFlow, Controls } from '@xyflow/react';
import StepNode from './StepNode';
import { useAtomValue } from 'jotai';
import { edgesAtom, nodesAtom } from './store';
import { useGetProgramStepsQuery } from 'src/features/programs/queries/useGetProgramStepsQuery';
import { useParams } from 'react-router';

const Diagram: React.FC = () => {
  const {} = useGetProgramStepsQuery();

  const nodes = useAtomValue(nodesAtom);
  const edges = useAtomValue(edgesAtom);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      colorMode="dark"
      fitView
      nodeTypes={{
        step: StepNode,
      }}
    >
      <Controls showInteractive={false} />
    </ReactFlow>
  );
};

export { Diagram };
