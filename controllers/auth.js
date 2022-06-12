import User from '../models/auth';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    const { name, email, password, role, status } = req.body;
    try {
        const checkUser = await User.findOne({ email }).exec();
        if (checkUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        } else {
            const user = await new User({ name, email, password, role, status }).save();
            res.json({
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    status:user.status
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Tài khoản không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu sai"
            })
        } else {
            const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: "1h" })
            res.json({
                message: "Đăng nhập thành công",
                token,
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    status:user.status
                }
            })
        }

    } catch (error) {
        console.log(error);
    }
}

export const list = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.json(user)
    } catch (error) {
        console.log(error);
    }

}
export const update = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id}, req.body,{new:true}).exec()
        res.json( user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi!!!"
        })
    }

}