import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Login() {

  const { login, register } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');

  const [esRegistro, setEsRegistro] = useState(false);

  const enviarFormulario = async (e) => {

    e.preventDefault();

    try {

      if (esRegistro) {

        await register(email, password);

      } else {

        await login(email, password);

      }

      navigate('/');

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <section style={{
        padding: '3rem',
        maxWidth: '400px',
        margin: '0 auto'
      }}
    >
      <h2>
        {esRegistro ? 'Registro' : 'Iniciar sesión'}
      </h2>

      <form onSubmit={enviarFormulario}>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">

          {esRegistro ? 'Registrarme' : 'Ingresar'}

        </button>
      </form>
      <br />

      <button
        onClick={() => setEsRegistro(!esRegistro)}
      >
        {esRegistro
          ? 'Ya tengo cuenta'
          : 'Crear una cuenta'}
      </button>
    </section>
  );
}

export default Login;