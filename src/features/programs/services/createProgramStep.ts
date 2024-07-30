import http from 'src/utils/http';

export type CreateProgramStepDTO = {
  name: string;
  description: string;
  programId: number;
  parentStepId?: number;
};

export const createProgramStep = async (data: CreateProgramStepDTO) => {
  const response = await http.post('/step/create-or-update', {
    ...data,
    id: 0,
    code: '',
    prerequisites: '',
    cleanCode: '',
    cleanPrerequisites: '',
    parentStepId: data.parentStepId ?? 0,
  });
  return response.data;
};
