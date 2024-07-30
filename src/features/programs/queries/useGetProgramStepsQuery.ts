import { useQuery } from '@tanstack/react-query';
import { getProgramSteps } from '../services/getProgramSteps';

export const useGetProgramStepsQuery = (programID: number) => {
  return useQuery({
    queryKey: ['program:steps', programID],
    queryFn: () => getProgramSteps(programID),
  });
};
