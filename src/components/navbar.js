import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import useWindowSize from "../hooks/useWindowSize";
export default function Navbar() {
  const size = useWindowSize().width;

  const nav = () => {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle "
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nosotros
          </div>
          <ul
            className={`dropdown-menu ${size <= 768 ? "show small" : "small"}`}
          >
            <li>
              <Link className="dropdown-item " to="Nosotros/PalabrasDirector">
                Palabras del Director
              </Link>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="Nosotros/ProyectoEducativo">
                Proyecto Educativo
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="Nosotros/ReglamentoInterno">
                Reglamento Interno
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="Nosotros/OrganigramaInstitucional"
              >
                Organigrama Institucional
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="Nosotros/PIE">
                Programa de Integración(PIE)
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="Nosotros/CATI">
                Equipo CATI
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Comunidad Educativa
          </div>
          <ul className={`dropdown-menu ${size <= 768 ? "show" : ""}`}>
            <li>
              <Link className="dropdown-item" to="ComEdu/ConvivenciaEscolar">
                Convivencia Escolar
              </Link>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link className="dropdown-item" to="ComEdu/CentroPadres">
                Centro de Padres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="ComEdu/CentroEstudiantes">
                Centro de Estudiantes
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Noticias">
            Noticias
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="CalendarioAcademico">
            Calendario Academico
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="ActividadesExtracurriculares">
            Actividades Extracurriculares
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#e3f2fd" }}
      id="navbar"
    >
      <div className="container-fluid"
      style={{ backgroundColor: "#e3f2fd" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img
          src={Logo}
          style={{ maxWidth: "80px" }}
          alt="Logotipo del colegio"
        />

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <img
              src={Logo}
              style={{ maxWidth: "80px" }}
              alt="Logotipo del colegio"
              className="offcanvas-title"
              id="offcanvasNavbarLabel"
            />
          </div>
          <div className="offcanvas-body" data-bs-toggle="offcanvas">
            {nav()}
          </div>
        </div>
      </div>
    </nav>
  );
}
