import express from "express"
const app = express();


import { globalErrorHandler } from "./utils/globalErrorHandler.js";
import {applyMiddleware} from "./middlewares/index.js";


import authRoutes from './routes/authentication/index.js';
import userRoutes from './routes/users/index.js';
applyMiddleware(app);


app.use(authRoutes)
app.use(userRoutes)



app.get("/health", (req, res) => {
  res.send("server is running....");
});

// handling all (get, post, update, delete.....)
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);



export default app