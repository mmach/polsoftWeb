import React, { useEffect } from "react";
import { useParams } from 'react-router';
import useWebSocket from "react-use-websocket";

type Prop = {
    children: React.ReactNode
    workId: number
}

export const WebsocketContext = ({ children, workId }: Prop) => {

    const { sendMessage, lastMessage, readyState } = useWebSocket(`wss://polsoft2000api.azurewebsites.net/ws?workId=${workId}`);

    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage)
        }
    }, [lastMessage, workId]);

    return children

}