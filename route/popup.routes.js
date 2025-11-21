import express from "express";
import {
createPopup,
getPopups,
getPopupById,
updatePopup,
deletePopup,
getPopupByWebsiteName,
} from "../controller/popup.controller.js";


const router = express.Router();


router.post("/create", createPopup);
router.get("/getAll", getPopups);
router.get("/getOne/:id", getPopupById);
router.put("/update/:id", updatePopup);
router.delete("/delete/:id", deletePopup);
router.get("/getByWebsite/:websiteName", getPopupByWebsiteName);


export default router;