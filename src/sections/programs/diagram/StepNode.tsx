import React from 'react';
import { NodeProps, Handle, Position, Node } from '@xyflow/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { Box, ButtonBase, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAtom } from 'jotai';
import { edgesAtom, nodesAtom } from './store';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  instructions: Yup.string().required(),
});

const defaultValues = {
  name: '',
  instructions: '',
};

type StepNode = Node<{}, 'step'>;

export default React.memo(({ data, id }: NodeProps<StepNode>) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  // New Nodes Creation
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);

  const onRightNodeCreate = () => {
    // Create Node
    const ID = `${+nodes[nodes.length - 1].id + 1}`;

    setNodes([
      ...nodes,
      {
        id: ID,
        type: 'step',
        position: {
          x: nodes[nodes.length - 1].position.x + 420,
          y: 0,
        },
        data: {},
      },
    ]);

    // Create Edge
    setEdges([
      ...edges,
      {
        id: `${nodes[nodes.length - 1].id}-${ID}`,
        source: ID,
        target: nodes[nodes.length - 1].id,
        style: {
          stroke: '#FFFFFF',
        },
      },
    ]);
  };

  const onLeftNodeCreate = () => {
    // Create Node
    const ID = `${+nodes[0].id - 1}`;

    setNodes([
      {
        id: ID,
        type: 'step',
        position: {
          x: nodes[0].position.x - 420,
          y: 0,
        },
        data: {},
      },
      ...nodes,
    ]);

    // Create Edge
    setEdges([
      ...edges,
      {
        id: `${nodes[0].id}-${ID}`,
        target: ID,
        source: nodes[0].id,
        style: {
          stroke: '#FFFFFF',
        },
      },
    ]);
  };

  const firstNode = id === nodes[0].id;
  const lastNode = id === nodes[nodes.length - 1].id;

  return (
    <>
      <Handle
        type="source"
        position={Position.Left}
        style={{ background: '#FFFFFF', height: 16, width: 16, border: '2px solid #111' }}
        isConnectable={false}
      />

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          borderRadius: '4px',
          padding: (theme) => theme.spacing(2),
          width: '320px',
        }}
      >
        <Stack direction="column" gap={1} sx={{ position: 'relative' }}>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack direction="column" gap={1}>
              <RHFTextField name="name" label="Name" />
              <RHFTextField multiline rows={3} name="instructions" label="Instructions" />
              <LoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading={formState.isSubmitting}
                disabled={!formState.isValid}
              >
                Save & Generate
              </LoadingButton>
            </Stack>
          </FormProvider>

          {firstNode ? (
            <ButtonBase
              sx={{
                position: 'absolute',
                top: '-16px',
                left: '-52px',
                backgroundColor: '#FFFFFF',
                height: '32px',
                width: '32px',
                borderRadius: '4px',
              }}
              onClick={onLeftNodeCreate}
            >
              +
            </ButtonBase>
          ) : null}

          {lastNode ? (
            <ButtonBase
              sx={{
                position: 'absolute',
                top: '-16px',
                right: '-52px',
                backgroundColor: '#FFFFFF',
                height: '32px',
                width: '32px',
                borderRadius: '4px',
              }}
              onClick={onRightNodeCreate}
            >
              +
            </ButtonBase>
          ) : null}
        </Stack>
      </Box>

      <Handle
        type="target"
        position={Position.Right}
        style={{ background: '#FFFFFF', height: 16, width: 16, border: '2px solid #111' }}
        isConnectable={false}
      />
    </>
  );
});
