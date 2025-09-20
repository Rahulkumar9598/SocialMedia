import express from "express"

configDotenv()
import { configDotenv } from "dotenv"

const app = express()

const port  = process.env.PORT || 5050


app.listen(port , () => {
    console.log(`server is listing on port ${port}..`)
})