import { useMutation } from '@tanstack/react-query';
import { APIProgramStep } from '../queries/useGetProgramStepsQuery';
import { removeProgramStep } from '../services/removeProgramStep';

export const useDeleteProgramStepMutation = (stepID: number) =>
  useMutation<APIProgramStep, unknown, void>({
    mutationKey: ['programs:steps:delete', stepID],
    mutationFn: () => removeProgramStep(stepID),
  });
