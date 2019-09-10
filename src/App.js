import React, { Component } from "react";

import "./bootstrap.min.css";
import Header from "./componentes/Header";
import NuevaCita from "./componentes/NuevaCita";
import ListaCitas from "./componentes/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };


  // es como el document.ready de jquery
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    // si tiene la forma adecuada (array) lo add al state
    if(citasLS){
      citas : JSON.parse(citasLS);
    }
  }
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    // copiar el  state actual
    const citas = [...this.state.citas, datos];
    // add el nuevo state
    this.setState({
      citas
    });
  };

  // elimina cita del state
  eliminarCita = id => {
    // copia del state
    const citasActuales = [...this.state.citas];
    // sacar id
    const citas = citasActuales.filter(cita => cita.id !== id);

    // actualizar state
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas = { this.state.citas }
              eliminarCita = { this.eliminarCita }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
