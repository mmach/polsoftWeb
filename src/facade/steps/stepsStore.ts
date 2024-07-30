import { atom } from 'jotai';
import { ProgramType } from 'src/types/program/programType';
import Http from 'src/utils/http';

// ----------------------------------------------------------------------

export const urlStepGet = atom('/program/get-by-logged-user')
export const urlStepCreateOrUpdate = atom('https://json.host.com')



export const fetchStepsByProgramAtom = atom(async (get): Promise<ProgramType[]> => {
    const response = await Http.get(get(urlStepGet))
    return await response as any
})
