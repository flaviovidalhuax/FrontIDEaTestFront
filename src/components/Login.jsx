import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../login.css"
import axios from "axios";
 
class Login extends React.Component{

state={
  form:{
    "login":"",
    "password":""
  },
  error:false,
  errorMsg:"Error de pruebas"
}

manejadorChange= async e=>{
  await this.setState({
    form:{
      ...this.state.form,
      [e.target.name] : e.target.value
    }
  })
}
  manejadorSubmit=e=>{
    e.preventDefault();
  }

  botonevent=()=>{

    //let url = "http://192.168.1.75:8070/login";
    let url = "http://localhost:8070/login";
    axios.post(url, this.state.form)
      .then(response => {
     if(response.status===200){
      console.log(response)
       localStorage.setItem("token",response.headers.authorization);
       window.location.replace("/Gestion");
     }else{
      this.setState({
        error:true,
        errorMsg: "Error"
      })
     }
      }).catch(error=>{
        
        this.setState({
          error:true,
          errorMsg:"Error"
        });
      })
      
  }
    render(){
        return(
        <React.Fragment>
          <div >
            <div className="wrapper fadeInDown">
           <div id="formContent">
  
    <form onSubmit={this.manejadorSubmit}> 
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={this.manejadorChange}/>
      <input className="fadeIn third" type="password" id="password"  name="password" placeholder="password" onChange={this.manejadorChange}/>
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.botonevent}/>
    </form>
    {this.state.error=== true &&
    <div className="alert alert-danger" role="alert">
       Credenciales erroneas
</div>
    }
  </div>
  </div>
  </div>
        </React.Fragment>
        );
    }

}export default Login