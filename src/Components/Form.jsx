import { createContext, useState, useEffect } from 'react';



function Form() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    if (nombre.length < 6 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      setEnviado(false);
    } else {
      setError(false);
      setEnviado(true);
      console.log(`Nombre: ${nombre}`);
      console.log(`Email: ${email}`);
    }
  }

  return (
    <form onSubmit={submitForm} className="form">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" minLength="6" required value={nombre} onChange={(event) => setNombre(event.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      {error && <p className="error">Por favor verifique su información nuevamente.</p>}
      <button type="submit">Enviar</button>
      {enviado && <p>Gracias, {nombre}.</p>}
    </form>
  );
}

export default Form;