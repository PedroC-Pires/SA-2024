import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Login.css";

function Codigo() {
  return (
    <>
        <div className="col aligncenter justcenter">
            <img src={logo} className="logo1" />
            <button className="btn_cyan">Enviar</button>
        </div>
    </>
  );
}

export default Codigo;