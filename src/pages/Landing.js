import { Link } from "react-router-dom";
import BgImg from "../assets/background.jpg";
import logo from "../assets/logo3.png";
function landing() {
  return (
    <div className="card text-bg-dark rounded-0 border-0">
      <img
        src={BgImg}
        className="card-img opacity-25"
        style={{ filter: "blur(5px)", height: "100vh" }}
        alt="Entrada del colegio con desenfoque"
      />
      <div className="container card-img-overlay">
        <div className="row h-100 align-content-center">
          <div className="col-12 col-md-6">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>

          <div className="col-12 col-md-6 align-self-center text-center">
            <div className="card-body">
              <p className="card-text">
                "Bienvenido al Colegio XYZ, donde ofrecemos una educación
                excepcional para nuestros estudiantes. Nuestros profesores
                altamente capacitados y nuestras instalaciones modernas
                garantizan que nuestros estudiantes tengan las herramientas
                necesarias para alcanzar sus metas académicas y personales.
                ¡Visita nuestro sitio web para obtener más información y
                programar una visita guiada del colegio!
              </p>
              <div className="d-flex justify-content-evenly">
                <Link className="btn btn-primary" to="Login">
                  Login
                </Link>
                <Link className="btn btn-secondary" to="Inicio">
                  Visita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing;
