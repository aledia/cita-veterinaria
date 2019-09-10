
import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial = {
    cita:{
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    },
    error:false

}

class NuevaCita extends Component {
    state = { ...stateInicial }
    // cuando el usuario escribe en los input
    handelChange = (e) =>{
       
        // coloca lo que el usuario escribe en el state


        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
       
    }

    // cuando el usuario envía el form
    handleSubmit = e => {
        e.preventDefault();
        
        // extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        if(mascota === '' || propietario ==='' || fecha === '' || hora ===''|| sintomas ===''){
                this.setState({
                    error:true
                })

                // detener la ejecución
                return;
        }
        // Generar un objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();



        // add la cita al state
        this.props.crearNuevaCita(nuevaCita)

        // colocar en el state el state inicial para reiniciar el formulario
        this.setState({
            ...stateInicial
        })
        
    }



    render() {
        // extraer valor del state
        const { error } = this.state;


        return (
            <div className="card mt-5 py-5">
                <div className="card-body ">
                    <h2 className="card-title text-center mb-5 ml-5">
                       Crear nueva cita
                    </h2>
                    {/* comprueba los cambios en el state y se vuelve a ejecutar el render, y si existe error existe y muestra la alerta  */}
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre  mascota"
                                    name="mascota"
                                    onChange={this.handelChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre  dueño mascota"
                                    name="propietario"
                                    onChange={this.handelChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handelChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        
                       
                            <label className="col-sm-3 col-lg-1 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handelChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-9">
                              <textarea
                               className="form-control" 
                               name="sintomas"
                               placeholder="describe los sintomas"
                               cols="30" 
                               rows="10"
                               onChange={this.handelChange}
                               value={this.state.cita.sintomas}
                               ></textarea>
                            </div>
                        </div>
                        <input type="submit"id="boton" className="py-3 mt-2 btn btn-success btn-block" value="agregar nueva cita" />
                        
                    </form>
                </div>
            </div>
        )
    }
}


NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;