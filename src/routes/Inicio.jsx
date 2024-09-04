import { Link } from "react-router-dom";
import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Login.css";

function Inicio() {
  return (
    <>
      <div className="row">
        <div className="col aligncenter justcenter">
            <img src={logo} className="logo1" />
            <a href="register"><button className="btn_cyan">Cadastro</button></a>
            <p>ou</p>
            <a href="login"><button className="btn_orange">Login</button></a>
        </div>
      </div>
        
        
    </>
  );
}

export default Inicio;
