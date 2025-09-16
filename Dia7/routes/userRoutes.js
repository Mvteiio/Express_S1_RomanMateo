import express from "express";
import jwt from "jsonwebtoken";
import UserController from  "../controllers/userController.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const userController = new UserController();

function authMiddleware(req, res, next){
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(403).json({
            msg: "Token Requerido"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                msg: "Token Invalido"
            })
        }
        req.user=decoded;
        next()
    })
}

//Rutas públicas
router.post("/register", (req, res)=> userController.register(req, res))
router.post("/login", (req, res)=> userController.login(req, res))
//Rutas protegidas
router.put("/udpate", authMiddleware, (req, res)=> userController.updateUser(req, res))
router.put("/update-password", authMiddleware, (req, res)=> userController)

export default router;