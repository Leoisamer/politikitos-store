import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebase/config";


function AdminSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  const obtenerSolicitudes = async () => {
    const snapshot = await getDocs(
      collection(db, "solicitudesAdopcion")
    );

    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setSolicitudes(lista);

  };

  useEffect(() => {
    obtenerSolicitudes();
  }, []);

  const eliminarSolicitud = async (id) => {
    const confirmar = window.confirm(
      "¿Eliminar esta solicitud?"
    );

    if (!confirmar) return;

    await deleteDoc(
      doc(db, "solicitudesAdopcion", id)
    );

    obtenerSolicitudes();

  };

  return (
    <section style={{ padding: "2rem" }}>

      <h2>Solicitudes de adopción</h2>

      <hr />

      {
        solicitudes.length === 0 ? (
          <p>No hay solicitudes registradas.</p>
        ) : (
          solicitudes.map((solicitud) => (
            <article
              key={solicitud.id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px"
              }}
            >
              <h3>{solicitud.nombre}</h3>

              <p>
                <strong>Email:</strong> {solicitud.email}
              </p>

              <p>
                <strong>Mensaje:</strong>
                <br />
                {solicitud.mensaje}
              </p>

              <p>
                <strong>Estado:</strong> {solicitud.estado}
              </p>

              <button
                onClick={() =>
                  eliminarSolicitud(solicitud.id)
                }
              >
                Eliminar
              </button>
            </article>
          ))
        )
      }
    </section>
  );
}

export default AdminSolicitudes;