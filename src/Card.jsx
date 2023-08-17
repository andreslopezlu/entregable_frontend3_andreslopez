//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      <h2>Datos de usuario y paciente registrados</h2>
      <ul>
        <li>Usuario: {props.usuario}</li>
        <li>Email: {props.email}</li>
        <li>Paciente: {props.paciente}</li>
        <li>Tipo de mascota: {props.tipo}</li>
      </ul>
    </div>
  );
}

export {Card};
