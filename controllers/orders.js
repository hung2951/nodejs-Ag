import Order from '../models/orders'
import OrderDetail from '../models/order-detail'

export const create = async (req,res)=>{
    try {
        const order = await new Order(req.body).save();
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được"
        })
    }
}

export const list = async (req,res)=>{
    try {
        const order = await  Order.find().exec();
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"Không tim được"
        })
    }
}

export const read = async (req, res) => {
    try {
        const IdOrder = await Order.findOne({ _id: req.params.id }).exec();
        const orderDetail = await OrderDetail.find({IdOrder}).exec();
        res.json({
            IdOrder,
            orderDetail
        })
    } catch (error) {}
}