import { Router } from "express";
import { create, list, read } from "../controllers/orders";

const router = Router();
router.post('/orders',create)
router.get('/orders',list)
router.get('/orders/getOrders/:id',read)
export default router;