import { useParams, Link } from 'react-router-dom';



function OrdenExitosa() {

  const { id } = useParams();

  return (

    <section
      style={{
        padding: '3rem',
        textAlign: 'center'
      }}
    >

      <h1>🎉 ¡Gracias por adoptar!</h1>

      <p style={{ marginTop: '1rem' }}>
        Tu solicitud fue registrada correctamente.
      </p>

      <h2 style={{ marginTop: '2rem' }}>
        Número de adopción
      </h2>

      <h3
        style={{
          color: '#0e0863',
          marginBottom: '2rem'
        }}
      >
        {id}
      </h3>

      <Link to="/">
        <button>
          Volver al inicio
        </button>
      </Link>

    </section>

  );

}

export default OrdenExitosa;