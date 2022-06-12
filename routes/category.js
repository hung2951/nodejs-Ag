import { Router } from "express";
import { create, getOne, list, remove, update } from "../controllers/category";
const router = Router();

router.post('/category', create);
router.get('/category/:id', getOne);
router.get('/category', list);
router.delete('/category/:id', remove);
router.patch('/category/:id', update);

export default router;