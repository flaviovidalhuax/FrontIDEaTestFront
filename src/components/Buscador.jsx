import React from "react";


class Buscador extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // Estado para el valor del campo de entrada
    };
  }
  manejadorChange = (event) => {
    // Actualiza el estado con el valor del campo de entrada
    this.setState({ inputValue: event.target.value });
  };
  
  botoneventSuccess=()=>{
    window.location.replace("/Activos");
  }
  botoneventSecundary=()=>{
    window.location.replace("/Inactivos");
  }
  botoneventDanger=()=>{
    window.location.replace("/Revocados");
  }
  manejadorSubmitNombre = (event) => {
    event.preventDefault(); 
    const { inputValue } = this.state;
    localStorage.setItem("nombre",inputValue);
    
    window.location.href = `/Nombre/${encodeURIComponent(inputValue)}`;
  };
  manejadorSubmitFechaI= (event) => {
    event.preventDefault(); 
    const { inputValue } = this.state;

    localStorage.setItem("FechaInicial",inputValue);
    window.location.href = `/FechaInicial/${encodeURIComponent(inputValue)}`;
  };
  manejadorSubmitFechaF = (event) => {
    event.preventDefault(); 
    const { inputValue } = this.state;
    localStorage.setItem("FechaFinal",inputValue);
    
    window.location.href = `/FechaFinal/${encodeURIComponent(inputValue)}`;
  };
  render() {
    return (
        <div>
        <button type="button" className="btn btn-outline-success" onClick={this.botoneventSuccess}>Activos</button>
        <button type="button" className="btn btn-outline-secondary" onClick={this.botoneventSecundary}>Inactivos</button>
        <button type="button" className="btn btn-outline-danger" onClick={this.botoneventDanger}>Revocados</button>

        <form onSubmit={this.manejadorSubmitNombre}> 
      <input  placeholder="Nombre" onChange={this.manejadorChange}/>
      <input type="submit" onClick={this.botonevent}/>
      </form >
      <form onSubmit={this.manejadorSubmitFechaI}> 
      <input  placeholder="Fecha inicial" onChange={this.manejadorChange}/>
      <input type="submit"  onClick={this.botonevent}/>
      </form>
      <form onSubmit={this.manejadorSubmitFechaF}> 
      <input  placeholder="Fecha final" onChange={this.manejadorChange}/>
      <input type="submit"  onClick={this.botonevent}/>
      </form>
        </div>
    );
  }
}

export default Buscador;