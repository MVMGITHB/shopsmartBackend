import mongoose from 'mongoose';


const popupSchema = new mongoose.Schema(
    {
        websiteName: {
            type: String,
            required: true,
            trim: true,
        },
        images: {
            type: [String],
            default: [],
        },
        linkArray: {
            type: [String],
            default: [],
        },
        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Inactive",
        },
    },
    { timestamps: true }
);


export default mongoose.model("Popup", popupSchema);