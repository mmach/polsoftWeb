import { useSetAtom } from "jotai";
import React, { useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { currentStepAtom } from "src/sections/programs/diagram/store";

import { WebSocketMessageType } from "src/types/program/programType";

type Prop = {
    children: React.ReactNode
    workId: number
}


export const WebsocketContext = ({ children, workId }: Prop) => {

    const { sendMessage, lastMessage, readyState } = useWebSocket(`wss://polsoft2000api.azurewebsites.net/ws?workId=${workId}`);
    const setCurrentStep = useSetAtom(currentStepAtom);
    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage)
            try {
                const obj = JSON.parse(lastMessage.data) as WebSocketMessageType
                console.log(obj);
                setCurrentStep(String(obj.StepId));
            } catch (er) {
                console.log(undefined)
            }
        }
        return () => setCurrentStep(null)
    }, [lastMessage, workId, setCurrentStep]);

    return children

}