import express from "express";
import jwt from "jsonwebtoken";
import UserController from  "../controllers/userController.js";
import dotenv from "dotenv";
import passport from "passport";
dotenv.config();

const router = express.Router();
const userController = new UserController();


//Rutas públicas
router.post("/register", (req, res)=> userController.register(req, res))
router.post("/login", (req, res)=> userController.login(req, res))

//Rutas protegidas
router.put("/update", passport.authenticate('jwt', { session: false }), (req, res) => userController.updateUser(req, res));
router.put("/update-password", passport.authenticate('jwt', { session: false }), (req, res) => userController.updatePassword(req, res));

export default router;  