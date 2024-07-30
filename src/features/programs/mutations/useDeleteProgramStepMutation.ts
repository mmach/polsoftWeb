import { useMutation } from '@tanstack/react-query';

import { removeProgramStep } from '../services/removeProgramStep';
import { APIProgramStep } from '../queries/useGetProgramStepsQuery';

export const useDeleteProgramStepMutation = (stepID: number) =>
  useMutation<APIProgramStep, unknown, void>({
    mutationKey: ['programs:steps:delete', stepID],
    mutationFn: () => removeProgramStep(stepID),
  });
