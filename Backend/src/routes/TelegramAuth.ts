import { Router } from "express";
import { telegramAuth } from "../controller/telegram.controller"

const telegramAuthRouter = Router();

telegramAuthRouter.post("/telegram", telegramAuth)

export default  telegramAuthRouter;

