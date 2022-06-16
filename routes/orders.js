import { Router } from "express";
import { create, getOne, list, read, update } from "../controllers/orders";

const router = Router();
router.post('/orders',create)
router.get('/orders',list)
router.get('/orders/:id',getOne)
router.patch('/orders/:id',update)
router.get('/orders/getOrder/:id',read)
export default router;