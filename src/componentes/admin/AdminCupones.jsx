import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebase/config";


function AdminCupones() {
  const [cupones, setCupones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descuento, setDescuento] = useState("");
  const [activo, setActivo] = useState(true);
  const [editando, setEditando] = useState(null);

  const obtenerCupones = async () => {

    const snapshot = await getDocs(collection(db, "cupones"));

    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setCupones(lista);
  };

  useEffect(() => {
    obtenerCupones();
  }, []);

  const guardarProducto = async (e) => {
    e.preventDefault();

    const cupon = {
      nombre,
      codigo,
      descuento: Number(descuento),
      activo
    };

    if (editando) {
      await updateDoc(
        doc(db, "cupones", editando),
        cupon
      );

    } else {
      await addDoc(
        collection(db, "cupones"),
        cupon
      );
    }

    setNombre("");

    setCodigo("");

    setDescuento("");

    setActivo(true);

    setEditando(null);

    obtenerCupones();
  };

  const editarProducto = (producto) => {
    setNombre(producto.nombre);
    setCodigo(producto.codigo);
    setDescuento(producto.descuento);
    setActivo(producto.activo);
    setEditando(producto.id);
  };

  const eliminarCupon = async (id) => {

    const confirmar = window.confirm(
      "¿Eliminar cupón?"
    );

    if (!confirmar) return;

    await deleteDoc(doc(db, "cupones", id));

    obtenerCupones();
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Administración de Cupones</h2>

      <form onSubmit={guardarProducto}>
        <input
          type="text"
          placeholder="Nombre del cupón"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

         <br /><br />
        
        <input
          placeholder="Código del cupón"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Descuento (%)"
          value={descuento}
          onChange={(e)=>setDescuento(e.target.value)}
          required
        />

        <br /><br />

        <label>  
          <input
            type="checkbox"
            checked={activo}
            onChange={(e) => setActivo(e.target.checked)}
          />
        </label>                

        <br /><br />

        <button>
          {editando ? "Actualizar" : "Agregar"}
        </button>

      </form>

      <hr />

      {
        cupones.map((cupon)=>(

          <article
            key={cupon.id}
            style={{
              marginBottom:"20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f8f8f8"
             }}
          >
            <h3>{cupon.nombre}</h3>
            
            <p>
              <strong>Código:</strong> {cupon.codigo}
            </p>

            <p>
              <strong>Descuento:</strong> {cupon.descuento}% OFF
            </p>

            <p>
              <strong>Estado:</strong> {cupon.activo ? "🟢 Activo" : "🔴 Inactivo"}
            </p>

            <button onClick={()=>editarProducto(cupon)}>
              Editar
            </button>

            {" "}

            <button onClick={()=>eliminarCupon(cupon.id)}>
              Eliminar
            </button>
            
          </article>
        ))
      }
    </section>
  );
}

export default AdminCupones;