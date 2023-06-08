import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Load environment variables from the .env file, where the MONGO_URI is configured
dotenv.config();

const { MONGO_URI, PORT } = process.env;

if (!MONGO_URI) {
    console.error("No MONGO_URI environment variable has been defined in config.env");
    process.exit(1);
}

connectToDatabase(MONGO_URI)
    .then(() => {
        const app = express();
        app.use(cors());
        app.use("/employees", employeeRouter);

        // start the Express server
        app.listen(PORT || 5200, () => {
            console.log(`Server running at http://localhost:5200...`);
        });

    })
    .catch(error => console.error(error));
