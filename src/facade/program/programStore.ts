import { atom } from 'jotai';

import Http from 'src/utils/http';

import { ProgramType } from 'src/types/program/programType';

// ----------------------------------------------------------------------

export const urlProgramGet = atom('/program/get-by-logged-user')
export const urlProgramCreateOrUpdate = atom('https://json.host.com')



export const fetchProgramAtom = atom(async (get): Promise<ProgramType[]> => {
    const response = await Http.get(get(urlProgramGet))
    return await response.data as any
},
    // async (get, set, arg): Promise<ProgramType[]> => {
    // const response = await fetch(get(urlProgramCreateOrUpdate))
    // set(fetchProgram, response.data)
    //  },
)

export const actions = {
    fetchProgram: fetchProgramAtom,
    //   createProgram: createProgram
}
