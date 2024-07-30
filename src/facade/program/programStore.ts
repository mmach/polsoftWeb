import { ProgramType } from "src/types/program/programType";
import http from "src/utils/http";


export const ProgramAPI = {
    GetAll: () => http.get('/program/get-by-logged-user'),
    CreateNew: (body: ProgramType) => http.post('/program//create-or-update', body),
}