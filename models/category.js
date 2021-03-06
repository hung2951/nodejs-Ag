import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default:true
    }

}, { timestamps: true });

export default mongoose.model("category", categorySchema)
