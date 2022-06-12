import { Router } from "express";
import { list, signIn, signUp, update } from "../controllers/auth";

const router = Router();
router.post('/signup', signUp);
router.post('/signin', signIn)
router.get('/users', list)
router.patch('/users/:id', update)

export default router;