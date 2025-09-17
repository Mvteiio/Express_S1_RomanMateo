import express from "express";
import dotenv from "dotenv";
import routes from "./routes/userRoutes.js";
import passport from "passport";
import configurePassport from "./config/passport-config.js"; 

dotenv.config();

const app= express();
app.use(express.json());//Middleware para que solo acepte JSON'S

app.use(passport.initialize());
configurePassport(passport);


//Rutas Principales
app.use('/api',routes);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("FUNCIONAAAAAA EN:"+PORT);
})