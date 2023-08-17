import { render } from "react-dom";

import { Result } from "./Result";
import { useState } from "react";

function App() {

  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [paciente, setPaciente] = useState('')
  const [tipo, setTipo] = useState('')
  const [resultado, setResultado] = useState('')



  function validarUsuario(userName){
    let sinEspacios=userName.trim()
    if (sinEspacios.length>=3){
      return true 
    } else {
      return false
    }
  }

  function validarEmail(userEmail){
    if (userEmail.length>=6){
      return true 
    } else {
      return false
    }
  }

  function handleSubmit(e){
    e.preventDefault()

    const usuarioValido = validarUsuario(usuario)
    const emailValido = validarEmail(email)

    if (usuarioValido && emailValido){
      setResultado('ok')
    } else {
      setResultado('error')
    }
  }

  function handleOnChangeUsuario (e){
    setUsuario(e.target.value)
    setResultado('')
  }

  function handleOnChangeEmail (e){
    setEmail(e.target.value)
    setResultado('')
  }

  function handleOnChangePaciente (e){
    setPaciente(e.target.value)
    setResultado('')
  }

  function handleOnChangeTipo (e){
    setTipo(e.target.value)
    setResultado('')
  }

  return (
    <div className="App">
      <h1>Clínica veterinaria</h1>
      <h2>Ingreso de pacientes</h2>
      <h3>Datos del usuario y el paciente</h3>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="usuario">Nombre del usuario</label>
          <input placeholder="Usuario" type="text" name="usuario" onChange={handleOnChangeUsuario} value={usuario}></input>
          <label htmlFor="email">Correo del usuario</label>
          <input placeholder="email" type="text" name="email" onChange={handleOnChangeEmail} value={email}></input>
        </section>
        <section>
          <label htmlFor="paciente">Nombre del paciente</label>
          <input placeholder="Paciente" type="text" name="paciente" onChange={handleOnChangePaciente} value={paciente}></input>
          <label htmlFor="email">Tipo de mascota</label>
          <input placeholder="Perro o Gato" type="text" onChange={handleOnChangeTipo} value={tipo}></input>
        </section>
        <section>
          <button type="submit">
            Guardar datos
          </button>
        </section>
      </form>
      <Result result={resultado} usuario={usuario} email={email} paciente={paciente} tipo={tipo}/>
    </div>
  );
}

export default App;
