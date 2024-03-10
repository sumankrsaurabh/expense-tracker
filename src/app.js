import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from "./routers/user.routes.js"
import incomeRouter from "./routers/income.routes.js"
import expenseRouter from "./routers/expenses.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/income",incomeRouter)
app.use("/api/v1/expense",expenseRouter)

// http://localhost:8000/api/v1/users/register

export { app }