import http from 'src/utils/http';

export const removeProgramStep = async (stepID: number) => {
  const response = await http.delete(`/step/delete?stepId=${stepID}`);
  return response.data;
};
