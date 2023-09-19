import { io } from "socket.io-client";

export const socket = io("https://aic-backend.onrender.com:5002", {
    transports: ['websocket']
});