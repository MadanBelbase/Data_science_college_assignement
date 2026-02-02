import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import TelegramAuthRouter from "./routes/TelegramAuth";

dotenv.config();

const app = express();


app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://completable-nitrolic-megan.ngrok-free.dev"
  ]
}));

app.use(express.json());

app.use("/auth", TelegramAuthRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
