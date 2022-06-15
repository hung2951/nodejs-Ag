import OrderDetail from '../models/order-detail'

export const create = async (req, res) => {
    try {
        const orderDetail = await new OrderDetail(req.body).save();
        res.json(orderDetail)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const list = async (req,res)=>{
    try {
        const product = await OrderDetail.find().exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}