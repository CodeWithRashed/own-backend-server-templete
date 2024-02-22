import cookieParser from "cookie-parser";
import cors from "cors"
import config from "../config/defaults.js";
import express from "express"
const { LOCAL_CLIENT, LOCAL_CLIENT_SECOND, CLIENT_FIREBASE, CLIENT_VERCEL } = config;

export const applyMiddleware = (app) =>{
    
// middleware
app.use(cors({
    origin: [
        LOCAL_CLIENT,
        CLIENT_FIREBASE,
        CLIENT_VERCEL,
        LOCAL_CLIENT_SECOND
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}
