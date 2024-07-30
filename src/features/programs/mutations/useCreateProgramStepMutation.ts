import { useMutation } from '@tanstack/react-query';
import { createProgramStep } from '../services/createProgramStep';
import { APIProgramStep } from '../queries/useGetProgramStepsQuery';

type UseCreateProgramStepMutationVariables = {
  name: string;
  description: string;
  parentStepID?: number;
};

export const useCreateProgramStepMutation = (programID: number) => {
  return useMutation<APIProgramStep, unknown, UseCreateProgramStepMutationVariables>({
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
