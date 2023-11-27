import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../template/Header";
import axios from "axios";

class Editar extends React.Component{
    manejadorChange= async e=>{
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name] : e.target.value
          }
        })
      }

      
    state={
        form:{
    "login": "",
    "password": "",
    "nombre": "",
    "cliente": 0,
    "email": "",
    "fechaAlta": "",
    "fechaBaja": "",
    "status": "",
    "intentos": 0,
    "fechaRevocado": 0,
    "fechaVigencia": "",
    "noAcceso": 0,
    "apellidoPaterno": "",
    "apellidoMaterno": "",
    "area": 0,
    "fechaModificacion":""
        },
        eroor:false,
        errorMsg:""
    }
    componentDidMount(){
      const login=localStorage.getItem("login");

        let url="http://192.168.1.75:8070/buscarByLogin/"+login;
         
    const accessToken = localStorage.getItem("token");

    
    if (accessToken) {
      
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
        axios.get(url, { headers })
        .then(response=>{
            this.setState({
                form:{
                 login: response.data.login,
                 password: response.data.password,
                 nombre: response.data.nombre,
                 cliente: response.data.cliente,
                 email:response.data.email,
                 fechaAlta:response.data.fechaAlta,
                 fechaBaja:response.data.fechaBaja,
                 status: response.data.status,
                 intentos: response.data.intentos,
                 fechaRevocado: response.data.fechaRevocado,
                 fechaVigencia: response.data.fechaVigencia,
                 noAcceso:response.data.noAcceso,
                 apellidoPaterno: response.data.apellidoPaterno,
                 apellidoMaterno: response.data.apellidoMaterno,
                 area: response.data.area,
                  fechaModificacion:response.data.fechaModificacion
                }
            })
        });
    }
    }
    manejadordeSumid=e=>{
        e.preventDefault();
      }

    put=()=>{
        let url="http://192.168.1.75:8070/actualizar";
        const accessToken = localStorage.getItem("token");

    
    if (accessToken) {
      
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
        axios.put(url,this.state.form,{headers})
        .then(response=>{
            console.log(response);
        });
      }}
    render(){
        return(
        <React.Fragment>
           <Header></Header>
           <div className="container">
            <h3>Editar Usuario</h3>
           </div>
           <div className="container">
           <div className="row">
           <form onSubmit={this.manejadordeSumid}>
  
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input  type="password" className="form-control" name="password" placeholder="Password" 
      />
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Nombre</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" 
      value={this.state.form.nombre} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Cliente</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="cliente" placeholder="Cliente" 
      value={this.state.form.cliente} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input  type="email" className="form-control"  name="email" placeholder="Email" 
      value={this.state.form.email} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Alta</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control"  name="fechaAlta" placeholder="Fecha Alta" 
      value={this.state.form.fechaAlta} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Baja</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control"  name="fechaBaja" placeholder="Fecha Baja" 
      value={this.state.form.fechaBaja} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Status</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="status" placeholder="Status" 
      value={this.state.form.status} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">Intentos</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="intentios" placeholder="Intentos" 
      value={this.state.form.intentos} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">Fecha Revocado</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fecachaRevocado" placeholder="Fecha Revocado" 
      value={this.state.form.fechaRevocado} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Vigencia</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fechaVigencia" placeholder="Fecha Vigencia" 
      value={this.state.form.fechaVigencia} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">No_Acceso</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="noAcceso" placeholder="No_Acceso" 
      value={this.state.form.noAcceso} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Apellido Paterno</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="apellidoPaterno" placeholder="Apellido Pterno" 
      value={this.state.form.apellidoPaterno} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Apellido Materno</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="apellidoMaterno" placeholder="Apellido Materno" 
      value={this.state.form.apellidoMaterno}onChange={this.manejadorChange} />
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Area</label>
    <div className="col-sm-10">
      <input  type="Area" className="form-control" name="area" placeholder="Area" 
      value={this.state.form.area} onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Modificacion</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fechaModificacion" placeholder="Fecha Modificacion" 
      value={this.state.form.fechaModificacion} onChange={this.manejadorChange}/>
    </div>
    </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" name="editar" className="btn btn-primary" onClick={this.put} onSubmit={this.manejadordeSumid}>Editar</button>
    </div>
  </div>
</form>
           </div>
           </div>
        </React.Fragment>
        );
    }

}export default Editar;