// controllers/topDealController.js
import TopDeal from '../model/topDealModel.js';

// ✅ Create TopDeal
export const createTopDeal = async (req, res) => {
  try {
    const { name, logo, link } = req.body;

    const topDeal = new TopDeal({ name, logo, link });
    await topDeal.save();

    res.status(201).json({
      success: true,
      message: "Top Deal created successfully",
      topDeal,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all TopDeals
export const getAllTopDeals = async (req, res) => {
  try {
    const topDeals = await TopDeal.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, topDeals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get TopDeal by ID
export const getTopDealById = async (req, res) => {
  try {
    const topDeal = await TopDeal.findById(req.params.id);
    if (!topDeal) {
      return res.status(404).json({ success: false, message: "Top Deal not found" });
    }
    res.status(200).json({ success: true, topDeal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update TopDeal
export const updateTopDeal = async (req, res) => {
  try {
    const { name, logo, link } = req.body;
    const updates = { name, logo, link, updatedAt: Date.now() };

    const topDeal = await TopDeal.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!topDeal) {
      return res.status(404).json({ success: false, message: "Top Deal not found" });
    }

    res.status(200).json({
      success: true,
      message: "Top Deal updated successfully",
      topDeal,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete TopDeal
export const deleteTopDeal = async (req, res) => {
  try {
    const topDeal = await TopDeal.findByIdAndDelete(req.params.id);
    if (!topDeal) {
      return res.status(404).json({ success: false, message: "Top Deal not found" });
    }

    res.status(200).json({ success: true, message: "Top Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
