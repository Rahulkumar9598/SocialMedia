import express from "express"
import { configDotenv } from "dotenv"
import connectDb from "./config/connectDb.js"
import userRoutes from "./routes/user.routes.js"

configDotenv()
const app = express()
connectDb()
const port  = process.env.PORT || 5050

app.use(express.urlencoded({extended : true}))

app.use("/api/user" , userRoutes)



app.listen(port , () => {
    console.log(`server is listing on port ${port}..`)
})