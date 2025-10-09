// routes/brandRoutes.js
import express from 'express';
import {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
} from '../controller/brandController.js';
import { updateStatus } from '../controller/brandController.js';

const router = express.Router();

router.post('/create', createBrand);
router.get('/get', getAllBrands);
router.get('/getOne/:id', getBrandById);
router.put('/update/:id', updateBrand);
router.delete('/delete/:id', deleteBrand);
router.patch('/toggled/:id' ,updateStatus);

export default router;
