


import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";
import productos from "../data/productos.json";

export const subirProductos = async () => {

  try {

    const productosRef = collection(db, "productos");

    for (const producto of productos) {

      await addDoc(productosRef, producto);

    }

    console.log("Productos cargados correctamente.");

  } catch (error) {

    console.error(error);

  }

};