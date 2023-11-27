import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../template/Header";
import axios from "axios";


class Dashboard extends React.Component{

      
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
    "area":0,
    "fechaModificacion":""
        },
        eroor:false,
        errorMsg:""
    }

    manejadordeSumid = async e => {
        e.preventDefault(); 
      
        const url = "http://localhost:8070/agregarUsuario"; 
        const token =localStorage.getItem("token"); 
      
        try {
          const response = await axios.post(url, this.state.form, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }); 
          console.log("Datos guardados:", response.data);
      
        
      
        } catch (error) {
          
          console.error("Error al guardar datos:", error);
          
        }
      };

      manejadorChange= async e=>{
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name] : e.target.value
          }
        })
      }
    render(){
        return(
        <React.Fragment>
           <Header></Header>
           <div className="container">
            <h3>Guardar Usuario</h3>
           </div>
           <div className="container">
           <div className="row">
           <form onSubmit={this.manejadordeSumid}>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Login</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="login" placeholder="Login" 
       onChange={this.manejadorChange}/>
    </div>
  </div>
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
      onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Cliente</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="cliente" placeholder="Cliente" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input  type="email" className="form-control"  name="email" placeholder="Email" 
      onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Alta</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control"  name="fechaAlta" placeholder="Fecha Alta" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Baja</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control"  name="fechaBaja" placeholder="Fecha Baja" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Status</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="status" placeholder="Status" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">Intentos</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="intentios" placeholder="Intentos" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">Fecha Revocado</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fecachaRevocado" placeholder="Fecha Revocado" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Vigencia</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fechaVigencia" placeholder="Fecha Vigencia" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">No_Acceso</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="noAcceso" placeholder="No_Acceso" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Apellido Paterno</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="apellidoPaterno" placeholder="Apellido Pterno" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Apellido Materno</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="apellidoMaterno" placeholder="Apellido Materno" 
      onChange={this.manejadorChange} />
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Area</label>
    <div className="col-sm-10">
      <input  type="Area" className="form-control" name="area" placeholder="Area" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Fecha Modificacion</label>
    <div className="col-sm-10">
      <input  type="text" className="form-control" name="fechaModificacion" placeholder="Fecha Modificacion" 
       onChange={this.manejadorChange}/>
    </div>
    </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" name="guardar" className="btn btn-primary" onClick={this.manejadordeSumid}>Guardar</button>
    </div>
  </div>
</form>
           </div>
           </div>
        </React.Fragment>
        );
    }


}export default Dashboard;