import dotenv from "dotenv"
dotenv.config()
import express, { Express, Request, Response, NextFunction } from "express"
import helmet from "helmet"
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit"
import pino from "pino-http"
import errorHandler from "./middleware/errorHandling/errorHandler"
import quizRouter from "./components/quiz/quiz.routes"
import questionRouter from "./components/question/question.routes"
import setupDatabase from "./db/setup"
const app: Express = express()
const port = process.env.PORT || 3000

const limiter: RateLimitRequestHandler = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "too many requests" },
})

if (process.env.ENV === "production") app.use(pino())
app.use(helmet())
app.use(limiter)
app.use(express.json())
setupDatabase()

quizRouter.use("/question", questionRouter)
app.use("/quiz", quizRouter)

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Not Found" })
})
app.use(errorHandler)

app.listen(port, () => {
    pino().logger.info(`💻 Server is running at localhost:${port}`)
})
