// routes/bestDealRoutes.js
import express from "express";
import {
  createBestDeal,
  getAllBestDeals,
  getBestDealById,
  updateBestDeal,
  deleteBestDeal,
} from "../controller/bestDealController.js";

const router = express.Router();

router.post("/create", createBestDeal);
router.get("/get", getAllBestDeals);
router.get("/getOne/:id", getBestDealById);
router.put("/update/:id", updateBestDeal);
router.delete("/delete/:id", deleteBestDeal);

export default router;
