import { useAtom } from 'jotai';
import { fetchProgramAtom } from './programStore';
import { ProgramType } from 'src/types/program/programType';

// ----------------------------------------------------------------------

interface ReturnType {
    programs: ProgramType[]
}   

export function useProgramFacade(): ReturnType {
    const [programs, setPrograms] = useAtom(fetchProgramAtom)

    return {
        programs
    };
}
