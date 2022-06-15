import mongoose from "mongoose";
import {  Schema,ObjectId } from "mongoose";
const orderDetailSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    sale_price: {
        type: Number,
        required:true
    },
    img: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    IdOrder: {
        type: ObjectId,
        ref: "Orders"
    },
    IdProduct: {
        type: ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
}, { timestamps: true })
export default mongoose.model("OrderDetails", orderDetailSchema)
