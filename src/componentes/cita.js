import React from 'react'



const Cita = ({cita, eliminarCita }) => (
    <div className="media-body">
        <h3 className="mt-3">{cita.mascota}</h3> 
        <p className="card-text"><span><b>Nombre dueño: </b></span>{cita.propietario}</p>
        <p className="card-text"><span><b>Fecha: </b></span>{cita.fecha}</p>
        <p className="card-text"><span><b>Hora: </b></span>{cita.hora}</p>
        <p className="card-text"><span><b>Síntomas: </b></span></p>
        <p className="card-text">{cita.sintomas}</p>
        <button 
        className="btn btn-danger"
        onClick={() => eliminarCita(cita.id)}
        // al tener arroeF espera que pase el evento para pasar el id
        > Borrar &times;</button>

    </div>
   
);
export default Cita;
