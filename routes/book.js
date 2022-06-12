import { Router } from "express";
import { list, post, getProductById, remove, update, search, UploadImage } from "../controllers/books";
import { read } from "../controllers/category";
const router = Router();

router.get('/product', list)
router.get('/product/:id', getProductById)
router.get('/product/product_category/:id', read);
router.post('/product', post)
router.patch('/product/:id',update)
router.delete('/product/:id', remove)
router.get('/search', search)

router.post('/upload-img', UploadImage);
export default router;