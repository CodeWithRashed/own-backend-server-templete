import { connectDB } from "./src/db/connectDB.js";
import dotenv from "dotenv";
import http from "http";
import app from "./src/app.js";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

const main = async () => {
    try {
        await connectDB();
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error.message);
    }
};

main();
