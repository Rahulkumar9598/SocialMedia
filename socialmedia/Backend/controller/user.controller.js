import userModel from "../models/user.model.js"

export const handleUserRegister = async (req, res) => {
    try {
        const { name, username, email, password } = req.body


        const isExist = await userModel.findOne({email , username})

        if(isExist){
            return 
        }

        const newUser = new userModel({
            username,
            name,
            password,
            email
        })

        await newUser.save()


       return  res.status(201).json({
            message : "User Created",
            error : false,
            success : true,
            newUser
        })
        

    } catch (error) {
        console.log(error)
    }
}
