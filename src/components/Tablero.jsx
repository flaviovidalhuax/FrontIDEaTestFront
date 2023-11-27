import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../template/Header";
import Buscador from "./Buscador";
import axios from "axios";
class Tablero extends React.Component{

    state={
        usuarios:[]
    }
editarUsuario(login){
    console.log(login);
    localStorage.setItem("login",login);

}

eliminarUsuario(login){
    console.log(login);
  let url="http://192.168.1.75:8070/eliminar/"+login;
  const accessToken = localStorage.getItem("token");

    
  if (accessToken) {
    
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios.delete(url,{headers})
    .then(response=>{

    })}
}
manejadordeSumid=e=>{
    e.preventDefault();
  }

    componentDidMount(){
        let url="http://192.168.1.75:8070/buscarAll";
         
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
      <th scope="col">ACCION</th>
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
      <td><a href="/Editar" onClick={()=>this.editarUsuario(value.login)}>Editar</a>/<a  href="/Tablero" onClick={()=>this.eliminarUsuario(value.login)} >Baja</a>
      </td>
    </tr>
        )
    })}
    
  </tbody>
</table>
        </React.Fragment>
        );
    }

}export default Tablero;