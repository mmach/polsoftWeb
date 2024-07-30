import { useMutation } from '@tanstack/react-query';
import { updateProgramStep } from '../services/updateProgramStep';

type UseUpdateProgramStepMutationVariables = {
  name: string;
  description: string;
  stepID: number;
};

export const useUpdateProgramStepMutation = (programID: number) => {
  return useMutation<unknown, unknown, UseUpdateProgramStepMutationVariables>({
    mutationKey: ['programs:steps:update', programID],
    mutationFn: (data) =>
      updateProgramStep({
        programId: programID,
        description: data.description,
        name: data.name,
        stepId: data.stepID,
      }),
  });
};
