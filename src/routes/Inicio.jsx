import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Login.css";

function Inicio() {
  return (
    <>
        <div className="col aligncenter justcenter">
            <img src={logo} className="logo1" />
            <button className="btn_cyan">Cadastro</button>
            <p>ou</p>
            <button className="btn_orange">Login</button>
        </div>
        
    </>
  );
}

export default Inicio;
