import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { Node, Edge, Controls, ReactFlow } from '@xyflow/react';

import { useGetProgramStepsQuery } from 'src/features/programs/queries/useGetProgramStepsQuery';

import StepNode from './StepNode';
import { edgesAtom, nodesAtom } from './store';
import { PreviewCodeDialog } from './PreviewCodeDialog';

type DiagramProps = {
  programID: number;
};

const Diagram: React.FC<DiagramProps> = ({ programID }) => {
  const { data, status } = useGetProgramStepsQuery(programID);
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);

  useEffect(() => {
    if (!data?.length) {
      setNodes([]);
      setEdges([]);

      return;
    }

    const n: Node[] = [];

    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];

      n.push({
        id: item.id.toString(),
        type: 'step',
        position: {
          x: n.length === 0 ? 0 : n[n.length - 1].position.x + 420,
          y: 0,
        },
        data: item,
      });
    }

    setNodes(n);

    // Connect All Nodes
    const e: Edge[] = [];

    for (let i = 0; i < n.length; i += 1) {
      if (i !== 0) {
        const item = n[i];

        e.push({
          id: `${n[i - 1].id}-${item.id}`,
          source: item.id,
          target: n[i - 1].id,
          style: {
            stroke: '#FFFFFF',
          },
        });
      }
    }

    setEdges(e);
  }, [data, setEdges, setNodes]);

  // TODO: Loading & Error
  if (status === 'pending') {
    return null;
  }

  return (
    <>
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

      <PreviewCodeDialog />
    </>
  );
};

export { Diagram };
