import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAtom, useAtomValue } from 'jotai';
import React, { useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Node, Handle, Position, NodeProps } from '@xyflow/react';

import { LoadingButton } from '@mui/lab';
import { Box, Stack, Button, ButtonBase } from '@mui/material';

import { useProgramFacade } from 'src/facade/program/useProgramFacade';
import { APIProgramStep } from 'src/features/programs/queries/useGetProgramStepsQuery';
import { useCreateProgramStepMutation } from 'src/features/programs/mutations/useCreateProgramStepMutation';
import { useUpdateProgramStepMutation } from 'src/features/programs/mutations/useUpdateProgramStepMutation';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

import { InstructionsDialog } from './InstructionsDialog';
import { edgesAtom, nodesAtom, currentStepAtom, previewCodeAtom } from './store';
import { useDeleteProgramStepMutation } from 'src/features/programs/mutations/useDeleteProgramStepMutation';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  instructions: Yup.string().required(),
});

type StepNode = Node<APIProgramStep, 'step'>;

export default React.memo(({ data, id }: NodeProps<StepNode>) => {
  const { id: programGUID } = useParams();
  const { programs } = useProgramFacade();

  const defaultValues = {
    name: data.name ?? '',
    instructions: data.description ?? '',
  };

  // Note: This will be always defined (parent guards value)
  const programID = useMemo<number>(
    () => programs?.find((program) => program.guid === programGUID)!.id,
    [programs, programGUID]
  );

  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);

  // Form Handlers
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit, formState } = methods;

  // Handle Step Creation
  const { mutateAsync: create } = useCreateProgramStepMutation(programID);
  const { mutateAsync: update } = useUpdateProgramStepMutation(programID);

  const onSubmit = handleSubmit(async (values) => {
    const res = data.code?.length
      ? await update({
          name: values.name,
          description: values.instructions,
          parentStepID: data.parentStepId,
          stepID: +id,
        })
      : await create({
          name: values.name,
          description: values.instructions,
          parentStepID: nodes.length === 0 ? undefined : +nodes[nodes.length - 1].id,
        });

    setNodes(
      nodes.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          data: {
            ...item.data,
            ...res,
          },
        };
      })
    );
  });

  // Node Deletion
  const { mutateAsync: remove } = useDeleteProgramStepMutation(+id);

  const onNodeRemove = async () => {
    await remove();

    setNodes(nodes.filter((item) => item.id !== id));
    setEdges(edges.filter((item) => item.source !== id && item.target !== id));
  };

  // New Nodes Creation
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

  // Code Preview
  const [, setPreviewCode] = useAtom(previewCodeAtom);

  const onCodePreview = () => {
    setPreviewCode(data);
  };

  // Instructions Dialog
  const [instructionsDialogOpen, setInstructionsDialogOpen] = useState<boolean>(false);

  const onInstructionsDialogOpen = () => {
    setInstructionsDialogOpen(true);
  };

  const onInstructionsDialogClose = () => {
    setInstructionsDialogOpen(false);
  };

  // Current Step Highlight
  const currentStepID = useAtomValue(currentStepAtom);

  const lastNode = id === nodes[nodes.length - 1].id && !!nodes[nodes.length - 1].data.code;

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
          border: (theme) =>
            currentStepID === id ? `4px solid ${theme.palette.success.main}` : undefined,
        }}
      >
        <Stack direction="column" gap={1} sx={{ position: 'relative' }}>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack direction="column" gap={1}>
              <RHFTextField name="name" label="Name" />

              <Box sx={{ position: 'relative' }}>
                <RHFTextField multiline rows={6} name="instructions" label="Instructions" />

                <ButtonBase
                  sx={{
                    position: 'absolute',
                    top: (theme) => theme.spacing(1),
                    right: (theme) => theme.spacing(1),
                  }}
                  onClick={onInstructionsDialogOpen}
                >
                  <Iconify icon="material-symbols:fullscreen" />,
                </ButtonBase>
              </Box>

              {data.code?.length ? (
                <Button
                  fullWidth
                  color="inherit"
                  size="large"
                  type="button"
                  variant="contained"
                  onClick={onCodePreview}
                  disabled={formState.isSubmitting}
                >
                  Preview Code
                </Button>
              ) : null}

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

            {instructionsDialogOpen ? (
              <InstructionsDialog onClose={onInstructionsDialogClose} />
            ) : null}
          </FormProvider>

          {lastNode ? (
            <>
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

              {nodes.length > 1 ? (
                <ButtonBase
                  sx={{
                    position: 'absolute',
                    top: '24px',
                    right: '-52px',
                    backgroundColor: '#FFFFFF',
                    height: '32px',
                    width: '32px',
                    borderRadius: '4px',
                  }}
                  onClick={onNodeRemove}
                >
                  -
                </ButtonBase>
              ) : null}
            </>
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
