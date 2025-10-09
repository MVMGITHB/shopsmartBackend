// models/Brand.js
import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Inactive",
    enum: ["Active", "Inactive"],
  },
  logo: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Brand = mongoose.model('Brand', brandSchema);
export default Brand;
