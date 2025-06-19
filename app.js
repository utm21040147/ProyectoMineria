// Importa las librerias necesarias
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/palabras.controller.js";



dotenv.config();
// Conexion a MONGODB
mongoose.connect(process.env.urlbd)
// Si si conecta a mongodb, muestra:
.then(() => {
    console.log("CONECTADO A MONGODB");
})
// Si no conecta a mongodb, muestra:
.catch((error) => {
    console.log("ERROR CONNECTANDO A MONGODB:", error);
});

const app = express();
app.use(cors()); //Da seguridad a nuestro servidor
app.listen(4000, () => {
    console.log("ESCUCHANDO AL SERVIDOR EN EL PUERTO 4000");
});


test(); //Llama al controlador