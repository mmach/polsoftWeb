import { useAtom, useSetAtom } from "jotai";
import React, { useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { historyAtom } from "src/pages/programs/runProgram/store";

import { currentStepAtom } from "src/sections/programs/diagram/store";

import { WebSocketMessageType } from "src/types/program/programType";

type Prop = {
    children: React.ReactNode
    workId: number
}


export const WebsocketContext = ({ children, workId }: Prop) => {

    const { sendMessage, lastMessage, readyState } = useWebSocket(`wss://polsoft2000api.azurewebsites.net/ws?workId=${workId}`);
    const setCurrentStep = useSetAtom(currentStepAtom);
    const setHistoryAtom = useSetAtom(historyAtom);
    const [history] = useAtom(historyAtom);

    useEffect(() => {
        if (lastMessage !== null) {
            try {
                const obj = JSON.parse(lastMessage.data) as WebSocketMessageType
                console.log(obj);
                setCurrentStep(String(obj.StepId));
                setHistoryAtom([...history, obj]);

            } catch (er) {
                console.log(undefined)
            }
        }
        return () => {
            setCurrentStep(null)
            setHistoryAtom([])
        }
    }, [lastMessage, workId, setCurrentStep, setHistoryAtom, history]);

    return children

}