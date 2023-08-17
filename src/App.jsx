import { render } from "react-dom";
import {Card} from "./Card";
import {Error} from './Error'
import { useState } from "react";

function App() {

  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [paciente, setPaciente] = useState('')
  const [tipo, setTipo] = useState('')

  function validarUsuario(usuario){
    let sinEspacios=usuario.trim()
    if (sinEspacios.lenght<=3){
      return false 
    } else {
      return true
    }
  }

  function validarEmail(email){
    if (email.lenght<=6){
      return false 
    } else {
      return true
    }
  }

  function handlesubmit(e){

    e.preventDefault()

    const usuarioValido = validarUsuario(usuario)
    const emailValido = validarEmail(email)
  
    if (!usuarioValido || !emailValido){
      alert('no')
    } else {
      alert('ok')
    }

  }

  let resultado = validarUsuario(usuario) && validarEmail(email)

  return (
    <div className="App">
      <h1>Clínica veterinaria</h1>
      <h2>Ingreso de pacientes</h2>
      <h3>Datos del usuario y el paciente</h3>
      <form onSubmit={handlesubmit}>
        <section>
          <label htmlFor="usuario">Nombre del usuario</label>
          <input placeholder="Usuario" type="text" name="usuario" onChange={e=>setUsuario(e.target.value)} value={usuario}></input>
          <label htmlFor="email">Correo del usuario</label>
          <input placeholder="email" type="text" name="email" onChange={e=>setEmail(e.target.value)} value={email}></input>
        </section>
        <section>
          <label htmlFor="paciente">Nombre del paciente</label>
          <input placeholder="Paciente" type="text" name="paciente" onChange={e=>setPaciente(e.target.value)} value={paciente}></input>
          <label htmlFor="email">Tipo de mascota</label>
          <input placeholder="Perro o Gato" type="text" onChange={e=>setTipo(e.target.value)} value={tipo}></input>
        </section>
        <section>
          <button type="submit">
            Guardar datos
          </button>
        </section>
      </form>
      <></>
    </div>
  );
}

export default App;
