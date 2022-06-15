import { Router } from "express";
import { create, list } from "../controllers/order-detail";


const router = Router();
router.post('/orderDetail',create)
router.get('/orderDetail',list)
export default router;