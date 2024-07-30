import { useMutation } from '@tanstack/react-query';
import { createProgramStep } from '../services/createProgramStep';

type UseCreateProgramStepMutationVariables = {
  name: string;
  description: string;
  parentStepID: number;
};

export const useCreateProgramStepMutation = (programID: number) => {
  return useMutation<unknown, unknown, UseCreateProgramStepMutationVariables>({
    mutationKey: ['programs:steps:create', programID],
    mutationFn: (data) =>
      createProgramStep({
        programId: programID,
        parentStepId: data.parentStepID,
        description: data.description,
        name: data.name,
      }),
  });
};
