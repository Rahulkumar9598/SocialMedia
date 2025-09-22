import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const handleUserRegister = async (req, res, next) => {
    try {
        console.log(req.body, "this is body")
        const { name, username, email, password } = req.body

        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "name username email password is required",
                error: true,
                success: false
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isEmail = emailRegex.test(email)

        if (!isEmail) {
            return res.status(400).json({
                message: "Please provide valid Email",
                error: true,
                success: false
            })
        }



        const isEmailExist = await userModel.findOne({ email })
        const isUserNameExist = await userModel.findOne({ username })

        if (isEmailExist || isUserNameExist) {
            return res.status(400).json({
                message: "username or emial already exists",
                error: true,
                success: false
            })
        }

        const newUser = new userModel({
            username,
            name,
            password: hash,
            email
        })

        await newUser.save()

        const user = await userModel.findOne({ email })


        return res.status(201).json({
            message: "User Created successfully",
            error: false,
            success: true,
            user
        })


    } catch (error) {
        next(error)
    }
}


export const handleUserLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                message: "username and password is required",
                error: true,
                success: false
            })
        }

        const user = await userModel.findOne({ username }).select("+password")

        if (!user) {
            return res.status(400).json({
                message: "user not found",
                error: true,
                success: false
            })
        }


        const hashPassword = user.password

        const isTrue = bcrypt.compareSync(password , hashPassword)

        if(!isTrue){
            return res.status(400).json({
                message : "username or password is incorrect",
                error : true,
                success : false
            })
        }

        const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET_KEY)


        return res.status(200).json({
            message: "Login successfully",
            error: false,
            success: true,
            token
        })

    } catch (error) {
        next(error)
    }
}

export const handleGetUserDetails = async (req ,res , next) => {
    try {
        const {userId} = req.body;

        if(!userId){
            return res.status(400).json({
                message : "userId is required",
                error : true,
                success : false
            })
        }

        const user = await userModel.findById(userId)

        if(!user){
            return res.status(400).json({
                mesasge : "user not found",
                error : true,
                success : false
            })
        }

        return res.status(200).json({
            message : "this is user details",
            error : false,
            success : true,
            user
        })

    } catch (error) {
        next(error)
    }
}