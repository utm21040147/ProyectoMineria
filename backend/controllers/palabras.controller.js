// Los datos van en controladores

import { modeloPalabras } from '../models/palabras.model.js';

modeloPalabras.create({
    name: "palabra1",
    edad: 20,
})

export const test = () => {
    console.log("Llamando al controlador");
}