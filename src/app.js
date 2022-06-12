import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import authRoute from '../routes/auth'
import bookRoute from '../routes/book'
import cateRoute from '../routes/category'

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
//
app.use('/api',authRoute)
app.use('/api',bookRoute)
app.use('/api',cateRoute)
// connnect database
mongoose.connect('mongodb://localhost:27017/angular')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})