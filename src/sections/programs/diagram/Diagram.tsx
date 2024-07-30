import React, { useEffect } from 'react';
import { ReactFlow, Controls, Node, Edge } from '@xyflow/react';
import StepNode from './StepNode';
import { useAtom } from 'jotai';
import { edgesAtom, nodesAtom } from './store';
import { useGetProgramStepsQuery } from 'src/features/programs/queries/useGetProgramStepsQuery';

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

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      n.push({
        id: item.id.toString(),
        type: 'step',
        position: {
          x: n.length === 0 ? 0 : n[n.length - 1].position.x + 420,
          y: 0,
        },
        data: {
          code: item.code,
          name: item.name,
          description: item.description,
          parentStepID: item.parentStepId,
        },
      });
    }

    setNodes(n);

    // Connect All Nodes
    const e: Edge[] = [];

    for (let i = 0; i < n.length; i++) {
      if (i === 0) {
        continue;
      }

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

    setEdges(e);
  }, [data]);

  // TODO: Loading & Error
  if (status === 'pending') {
    return null;
  }

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
