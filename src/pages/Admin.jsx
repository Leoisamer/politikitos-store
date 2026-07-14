import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase/config";


function Admin() {

  const [productos, setProductos] = useState([]);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const [editando, setEditando] = useState(null);

  const obtenerProductos = async () => {

    const snapshot = await getDocs(collection(db, "productos"));

    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setProductos(lista);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const guardarProducto = async (e) => {
    e.preventDefault();

    const producto = {
      nombre,
      precio: Number(precio),
      descripcion,
      imagen
    };

    if (editando) {
      await updateDoc(
        doc(db, "productos", editando),
        producto
      );

    } else {
      await addDoc(
        collection(db, "productos"),
        producto
      );
    }

    setNombre("");

    setPrecio("");

    setDescripcion("");

    setImagen("");

    setEditando(null);

    obtenerProductos();
  };

  const editarProducto = (producto) => {
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
    setImagen(producto.imagen);
    setEditando(producto.id);
  };

  const eliminarProducto = async (id) => {

    const confirmar = window.confirm(
      "¿Eliminar producto?"
    );

    if (!confirmar) return;

    await deleteDoc(doc(db, "productos", id));

    obtenerProductos();
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Administración</h2>

      <form onSubmit={guardarProducto}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e)=>setPrecio(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="Imagen"
          value={imagen}
          onChange={(e)=>setImagen(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e)=>setDescripcion(e.target.value)}
          required
        />

        <br /><br />

        <button>
          {editando
            ? "Actualizar"
            : "Agregar"}
        </button>

      </form>

      <hr />

      {
        productos.map((producto)=>(

          <article
            key={producto.id}
            style={{
              marginBottom:"20px"
            }}
          >

            <strong>
              {producto.nombre}
            </strong>

            {" - $"}

            {producto.precio}

            <br />

            <button
              onClick={()=>editarProducto(producto)}
            >
              Editar
            </button>
            {" "}
            <button
              onClick={()=>eliminarProducto(producto.id)}
            >
              Eliminar
            </button>

          </article>
        ))
      }
    </section>
  );
}

export default Admin;