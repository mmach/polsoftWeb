import React, { useEffect } from "react";
import { useParams } from 'react-router';
import useWebSocket from "react-use-websocket";

type Prop = {
    children: React.ReactNode
}

const WebsocketContext = ({ children }: Prop) => {

    const params = useParams();
    const { sendMessage, lastMessage, readyState } = useWebSocket(`wss://polsoft2000api.azurewebsites.net/ws?workId=${params.workId}`);

    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage)
        }
    }, [lastMessage, params.workId]);

    return children

}