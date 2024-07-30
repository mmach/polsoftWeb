import { useAtom } from 'jotai';

import { ProgramType } from 'src/types/program/programType';

import { fetchProgramAtom } from './programStore';

// ----------------------------------------------------------------------

interface ReturnType {
    programs: ProgramType[]
}

export function useProgramFacade(): ReturnType {
    const [programs] = useAtom(fetchProgramAtom)

    return {
        programs
    };
}
