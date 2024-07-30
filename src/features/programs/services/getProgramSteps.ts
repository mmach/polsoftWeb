import http from 'src/utils/http';

export const getProgramSteps = async (programID: number) => {
  const response = await http.get(`/step/get-by-program-id?programId=${programID}`);
  return response.data;
};
