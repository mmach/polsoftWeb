import { useQuery } from '@tanstack/react-query';

import { getProgramSteps } from '../services/getProgramSteps';

export type APIProgramStep = {
  id: number;
  description: string;
  code: string;
  programId: number;
  parentStepId?: number;
  name: string;
};

export const useGetProgramStepsQuery = (programID: number) => useQuery<APIProgramStep[]>({
    queryKey: ['program:steps', programID],
    queryFn: () => getProgramSteps(programID),
  });
