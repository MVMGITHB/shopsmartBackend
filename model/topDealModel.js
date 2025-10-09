// models/TopDeal.js
import mongoose from 'mongoose';

const topDealSchema = new mongoose.Schema({
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

const TopDeal = mongoose.model('TopDeal', topDealSchema);
export default TopDeal;
