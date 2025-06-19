// Crear tablas y llamar las tablas
// Isaac Reyes


// Trae el esquema y el modelo
import { Schema, model } from "mongoose";

// Estructura que manda a llamar la tabla - Constante
const EsquemaPalabras = new Schema({
    name:String,
    edad:Number,    
})

// Creacion de la tabla
export const modeloPalabras = new model("palabras", EsquemaPalabras);
