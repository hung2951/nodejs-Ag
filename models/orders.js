import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:2,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    money:{
        type:Number,
    },
    status:{
        type:Number,
        default:0
    }
},{timestamps: true })


export default mongoose.model("Orders", ordersSchema)
