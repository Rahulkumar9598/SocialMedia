import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: "",
        select : false
    },
    profilePic: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    dob: {
        type: String,
        default: ""
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userModel"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userModel"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ],
    chat: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "chat"
        }
    ],
    blocked: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userModel"
        }
    ],
    otp : {
        type : Number,
        default : null,
        select : false
    }
})

const userModel = mongoose.model("userModel" , userSchema)

export default userModel