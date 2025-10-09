// controllers/bestDealController.js
import BestDeal from "../model/bestDeal.js";

// ✅ Create BestDeal
export const createBestDeal = async (req, res) => {
  try {
    const { name, logo, link } = req.body;

    const newBestDeal = new BestDeal({ name, logo, link });
    await newBestDeal.save();

    res.status(201).json({
      success: true,
      message: "Best Deal created successfully",
      bestDeal: newBestDeal,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all BestDeals
export const getAllBestDeals = async (req, res) => {
  try {
    const bestDeals = await BestDeal.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, bestDeals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get BestDeal by ID
export const getBestDealById = async (req, res) => {
  try {
    const bestDeal = await BestDeal.findById(req.params.id);
    if (!bestDeal)
      return res
        .status(404)
        .json({ success: false, message: "Best Deal not found" });

    res.status(200).json({ success: true, bestDeal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update BestDeal
export const updateBestDeal = async (req, res) => {
  try {
    const { name, logo, link } = req.body;
    const updates = { name, logo, link, updatedAt: Date.now() };

    const bestDeal = await BestDeal.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });

    if (!bestDeal)
      return res
        .status(404)
        .json({ success: false, message: "Best Deal not found" });

    res.status(200).json({
      success: true,
      message: "Best Deal updated successfully",
      bestDeal,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete BestDeal
export const deleteBestDeal = async (req, res) => {
  try {
    const bestDeal = await BestDeal.findByIdAndDelete(req.params.id);
    if (!bestDeal)
      return res
        .status(404)
        .json({ success: false, message: "Best Deal not found" });

    res.status(200).json({
      success: true,
      message: "Best Deal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
