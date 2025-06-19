// Los datos van en controladores

import { modeloPalabras } from '../models/palabras.model.js';

// Crea dos tablas para la base de datos
modeloPalabras.create({
    name: "palabra1",
    edad: 20,
})

// Controlador de palabras
export const test = () => {
    console.log("Llamando al controlador");
}