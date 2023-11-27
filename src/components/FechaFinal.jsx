import React from "react";
import Header from "../template/Header";
import Buscador from "./Buscador";
import axios from "axios";


class FechaFinal extends React.Component {
  
    state={
        usuarios:[]
    }

    componentDidMount(){
        let FechaI=localStorage.getItem("FechaFinal");
        
        let url="http://192.168.1.75:8070/buscarByFechaBaja/"+FechaI;
         
    const accessToken = localStorage.getItem("token");

    
    if (accessToken) {
      
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
        axios.get(url, { headers })
        .then(response=>{
            this.setState({
                usuarios:response.data
            })
        });
    }
    }
    render(){
        return(
        <React.Fragment>
           <Header></Header>
           <Buscador></Buscador>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">NOMBRE</th>
      <th scope="col">LOGIN</th>
      <th scope="col">FECHA ALTA</th>
      <th scope="col">ESTATUS</th>
    </tr>
  </thead>
  <tbody>
    {this.state.usuarios.map((value,index)=>{
        return(
      <tr key={index}>
      <td>{value.nombre}</td>
      <td>{value.login}</td>
      <td>{value.fechaAlta}</td>
      <td>{value.status}</td>
    
    </tr>
        )
    })}
    
  </tbody>
</table>
        </React.Fragment>
        );
    }

}

export default FechaFinal;