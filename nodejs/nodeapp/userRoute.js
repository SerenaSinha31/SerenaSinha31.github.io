

// import express from 'express';
// const router = express.Router();

// router.get('/show', (req, res) => {
//     res.send("Show User");
// });
// router.post('/register', (req, res) => {
//     res.send("User Registration");
// });
// router.post('/login', (req, res) => {
//     res.send("User Login");
// });

// export default router;

import express from "express";
import { authenticate, authorize } from "./auth.js";
const Router = express.Router();
import {
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  showUsers,
} from "./userController.js";
Router.post("/register", register);
Router.post("/login", login);
Router.get("/showusers", authenticate, authorize("admin"), showUsers);
Router.patch("/:id", authenticate, authorize("admin"), updateUser);
Router.delete("/:id", authenticate, authorize("admin"), deleteUser);
Router.get("/:id/profile", authenticate, profile);
export default Router;