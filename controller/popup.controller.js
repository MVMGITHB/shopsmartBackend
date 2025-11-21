import Popup from "../model/popupModel.js";


// Create Popup
export const createPopup = async (req, res) => {
try {
const popup = await Popup.create(req.body);
res.status(201).json({ message: "Popup created", popup });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


// Get All Popups
export const getPopups = async (req, res) => {
try {
const popups = await Popup.find();
res.status(200).json(popups);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


// Get Single Popup
export const getPopupById = async (req, res) => {
try {
const popup = await Popup.findById(req.params.id);
if (!popup) return res.status(404).json({ message: "Popup not found" });
res.status(200).json(popup);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


// Update Popup
export const updatePopup = async (req, res) => {
try {
const popup = await Popup.findByIdAndUpdate(req.params.id, req.body, {
new: true,
});
if (!popup) return res.status(404).json({ message: "Popup not found" });
res.status(200).json({ message: "Popup updated", popup });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


// Delete Popup
export const deletePopup = async (req, res) => {
try {
const popup = await Popup.findByIdAndDelete(req.params.id);
if (!popup) return res.status(404).json({ message: "Popup not found" });
res.status(200).json({ message: "Popup deleted" });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


// Get one popup by websiteName
export const getPopupByWebsiteName = async (req, res) => {
  try {
    const { websiteName } = req.params;

    const popup = await Popup.findOne({ websiteName });

    if (!popup) {
      return res.status(404).json({ message: "Popup not found" });
    }

    res.status(200).json(popup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};