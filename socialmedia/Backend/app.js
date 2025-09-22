import express from "express"
import { configDotenv } from "dotenv"
import connectDb from "./config/connectDb.js"
import userRoutes from "./routes/user.routes.js"
import cors from "cors"
import { errorHandling } from "./middleware/errorHandling.js"
configDotenv()
const app = express()
connectDb()
const port  = process.env.PORT || 5050

app.use(cors({
    origin : "*"
}))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/api/user" , userRoutes)



app.use(errorHandling)
app.listen(port , () => {
    console.log(`server is listing on port ${port}..`)
})