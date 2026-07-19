import { useState } from "react";
import { subirProductos } from "./subirProductos";

function Seeder() {

  const [cargando, setCargando] = useState(false);

  const cargar = async () => {

    setCargando(true);

    await subirProductos();

    setCargando(false);

    alert("Productos cargados correctamente.");

  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      <button onClick={cargar} disabled={cargando}>

        {cargando ? "Cargando..." : "Subir productos a Firestore"}

      </button>

    </div>
  );

}

export default Seeder;