import { io } from "socket.io-client";

const socket = io("wss://bot-f.onrender.com/ws");

export default socket;
