import jwt from "jsonwebtoken"

export const auth = (req , res , next) => {
    try {
        const authorization = req.headers.authorization
        const data = jwt.decode(authorization , process.env.JWT_SECRET_KEY)
        console.log(data , "this is data")
        req.body = {...req.body , userId : data.userId}
        next()
    } catch (error) {
        next(error)
    }
}