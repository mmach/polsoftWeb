export interface ProgramType {
    id: number,
    guid: string,
    language: string,
    name: string
}

export interface WebSocketMessageType {
    WorkId: number,
    StepId: number,
    StepName: string,
    Output: string,
    Status: number,
    Id: number
}


export interface WorkType {
    agentIpAddress?: string
    id: number
    programId: number
    status: number
}