import http from 'src/utils/http';

export type UpdateProgramStepDTO = {
  name: string;
  description: string;
  stepId: number;
  programId: number;
};

export const updateProgramStep = async (data: UpdateProgramStepDTO) => {
  const response = await http.post('/step/create-or-update', data);
  return response.data;
};
