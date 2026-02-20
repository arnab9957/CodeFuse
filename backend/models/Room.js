import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required:true,
        unique:true
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    participants: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            socketId:String,
            joinedAt:{
                type:Date,
                default:Date.now
            }
        }
    ],
    pendingRequests:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }
});


const Room =  mongoose.model("Room", roomSchema);
export default Room;
