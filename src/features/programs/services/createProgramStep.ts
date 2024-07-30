import http from 'src/utils/http';

export type CreateProgramStepDTO = {
  name: string;
  description: string;
  programId: number;
  parentStepId: number;
};

export const createProgramStep = async (data: CreateProgramStepDTO) => {
  const response = await http.post('/step/create-or-update', data);
  return response.data;
};
