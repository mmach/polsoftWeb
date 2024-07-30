import React from 'react';
import { Node, Edge, ReactFlow, Controls } from '@xyflow/react';
import StepNode from './StepNode';
import { useAtomValue } from 'jotai';
import { edgesAtom, nodesAtom } from './store';

const Diagram: React.FC = () => {
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
