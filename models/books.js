import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        index: true,
        unique:true
    },
    price: {
        type: Number,
        default:0
    },
    sale_price: {
        type: Number,
        default:0
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    status:{
        type:Boolean,
        default:true
    },
    totalNumber:{
        type:Number,
        default:0
    }
}, { timestamps: true })
productSchema.index({ "$**": 'text' });
export default mongoose.model('Product', productSchema);