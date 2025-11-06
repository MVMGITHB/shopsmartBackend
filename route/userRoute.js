// import express from "express";
// import {
//   getAllUsers,
//   register,
//   login,
//   deleteUser,
// } from "../controller/userController.js"; 

// const router = express.Router();

// router.get("/users", getAllUsers);
// router.post("/register", register);
// router.post("/login", login);
// router.delete("/delete/:id", deleteUser);

// export default router;


import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUser,
  getAllAdmin,
  updateStatus,
  deleteUser,
  updateUser,
  getUserByslug,
  deleteUserBlog,
  verifyEmail
} from "../controller/userController.js";


const router = express.Router();

router.post("/register", registerUser);
router.patch("/updateUser/:id",updateUser);
router.patch("/deleteSpecificuserBLog/:id", deleteUserBlog);
router.post("/login", loginUser);
router.get("/getAllUsers", getAllUser);
router.get("/singleUserbyslug/:slug", getUserByslug);
router.get("/getAllAdmin", getAllAdmin);
router.patch('/toggled/:id', updateStatus);
router.delete('/deleteUser/:id', deleteUser);
router.get("/verify-email", verifyEmail);

export default router;

