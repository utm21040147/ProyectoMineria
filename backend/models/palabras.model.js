// Crear tablas y llamar las tablas

// Trae el esquema y el modelo
import { Schema, model } from "mongoose";

// Estructura que manda a llamar la tabla
const EsquemaPalabras = new Schema({
    palabras:Sting    
})

// Creacion de la tabla
export const modeloPalabras = new model("palabras", EsquemaPalabras);
