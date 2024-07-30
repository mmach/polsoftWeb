import { useMutation } from '@tanstack/react-query';

import { updateProgramStep } from '../services/updateProgramStep';
import { APIProgramStep } from '../queries/useGetProgramStepsQuery';

type UseUpdateProgramStepMutationVariables = {
  name: string;
  description: string;
  stepID: number;
  parentStepID?: number;
};

export const useUpdateProgramStepMutation = (programID: number) => useMutation<APIProgramStep, unknown, UseUpdateProgramStepMutationVariables>({
    mutationKey: ['programs:steps:update', programID],
    mutationFn: (data) =>
      updateProgramStep({
        programId: programID,
        description: data.description,
        name: data.name,
        id: data.stepID,
        parentStepId: data.parentStepID,
      }),
  });
