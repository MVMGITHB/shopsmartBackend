// models/BestDeal.js
import mongoose from "mongoose";

const bestDealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
  },
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BestDeal = mongoose.model("BestDeal", bestDealSchema);
export default BestDeal;
