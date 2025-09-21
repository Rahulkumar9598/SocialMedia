import mongoose from "mongoose"

const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("database connected..")
            })
    } catch (error) {
        console.log(error, "error while connecting database")
    }
}

export default connectDb