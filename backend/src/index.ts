import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import financialRecordRouter from "./routes/financial-records";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string | undefined = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI is not defined');
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/finacial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});