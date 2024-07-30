
import { ProgramType } from 'src/types/program/programType';

import { QueryObserverResult, RefetchOptions, useQuery } from '@tanstack/react-query';
import http from 'src/utils/http';
import { AxiosResponse } from 'axios';
import { ProgramAPI } from './programStore';

// ----------------------------------------------------------------------

interface ReturnType {
    programs: ProgramType[],
    isListFatched: boolean,
    refetchList: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, Error>>
}

export function useProgramFacade(): ReturnType {
    const { isLoading, isFetched, data: result, refetch } = useQuery({
        queryKey: ['GET_PROGRAM'],
        queryFn: ProgramAPI.GetAll,
    })

    return {
        programs: result?.data,
        isListFatched: isFetched,
        refetchList: refetch
    };
}



