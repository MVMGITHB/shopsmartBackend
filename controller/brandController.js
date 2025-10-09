// controllers/brandController.js
import Brand from '../model/brandModel.js';
import slugify from 'slugify';

// ✅ Create a new brand
export const createBrand = async (req, res) => {
  try {
    const { name,logo } = req.body;

    // Create slug automatically
    const slug = slugify(name, { lower: true, strict: true });

    const brand = new Brand({ name, slug,logo });
    await brand.save();

    res.status(201).json({ success: true, message: "Brand created successfully", brand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all brands
export const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, brands });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get brand by ID
export const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ success: false, message: "Brand not found" });
    }
    res.status(200).json({ success: true, brand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update brand
export const updateBrand = async (req, res) => {
  try {
    const { name,logo } = req.body;
    const updates = { name, logo, updatedAt: Date.now() };

    if (name) updates.slug = slugify(name, { lower: true, strict: true });

    const brand = await Brand.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!brand) {
      return res.status(404).json({ success: false, message: "Brand not found" });
    }

    res.status(200).json({ success: true, message: "Brand updated successfully", brand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateStatus = async (req, res) => {
  try {

    let jobs = await Brand.findById(req.params.id)
   

    if (!jobs) return res.status(404).json({ error: "Job not found" });

    if(jobs.status ==='Inactive')  {
      jobs.status ='Active'
    }else{
      jobs.status ='Inactive'
    }

   const Jobs =  await  jobs.save()

    res.json(Jobs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Delete brand
export const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ success: false, message: "Brand not found" });
    }
    res.status(200).json({ success: true, message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
