// routes/topDealRoutes.js
import express from 'express';
import {
  createTopDeal,
  getAllTopDeals,
  getTopDealById,
  updateTopDeal,
  deleteTopDeal
} from '../controller/topDealController.js';

const router = express.Router();

router.post('/', createTopDeal);
router.get('/', getAllTopDeals);
router.get('/:id', getTopDealById);
router.put('/:id', updateTopDeal);
router.delete('/:id', deleteTopDeal);

export default router;
