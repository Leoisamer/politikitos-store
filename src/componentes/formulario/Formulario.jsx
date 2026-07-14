import {useState} from 'react';
import styles from './Formulario.module.css';


function Formulario() {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Solicitud enviada al centro de adopción 😎');
   
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <section className={styles.formSection}>
      <h2>Solicitud de adopción gratuita 🇻🇪</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensaje"
          placeholder="¿Por qué deseas adoptar un politiKito?"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Enviar solicitud
        </button>
      </form>
    </section>
  );
}

export default Formulario;