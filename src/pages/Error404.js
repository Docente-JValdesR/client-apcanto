import { Link } from "react-router-dom";
import Error from "../assets/404.jpg";
export default function Error404() {
  return (
    <div
      className="d-flex align-items-end justify-items-center py-5"
      style={{
        backgroundImage: `url(${Error})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        zIndex: -1,
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <h2 className="text-white">
              Esta seccion aun esta en construcion, vuelve haciendo click en el
              boton
            </h2>
          </div>
          <div className="col-12 col-md-3">
            <Link to="/" className="btn btn-secondary">Vuelve al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
