import { Link } from "react-router-dom";

function Admin() {

  return (

    <section
      style={{
        padding: "2rem",
        textAlign: "center"
      }}
    >

      <h1>Panel de Administración</h1>

      <p>
        Seleccioná una opción.
      </p>

      <br />

      <Link to="/admin/productos">
        <button>
          📦 Gestionar Productos
        </button>
      </Link>

      <br /><br />

      <Link to="/admin/cupones">
        <button>
          🎟️ Gestionar Cupones
        </button>
      </Link>

    </section>

  );

}

export default Admin;