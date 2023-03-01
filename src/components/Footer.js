import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid text-bg-dark">
      <div className="d-flex align-items-center">
        <div className="container pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-6 order-1 order-md-0">
              <p>Reina de Chile 174, Recoleta, Región Metropolitana</p>
              <p>Teléfono: (2) 2945 7719</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.831652106203!2d-70.63151398490933!3d-33.40155600239041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5fdb13b33ef%3A0xd4003470f65eb7f4!2sReina%20de%20Chile%20174%2C%20Recoleta%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1676176052351!5m2!1ses-419!2scl"
                width={300}
                height={225}
                style={{ border: 0 }}
                allowFullScreen
                title="Mapa Colegio"
              />
            </div>
            <div className="col-md-6 order-0 order-md-1">
              <ul className="nav nav-pills justify-content-center">
                
                <li className="nav-item">
                  <strong className="nav-link fw-bold text-white">
                    Inicio
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="Noticias">
                        Noticias
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="CalendarioAcademico"
                      >
                        Calendario Académico
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ActividadesExtracurriculares"
                      >
                        Actividades Recientes
                      </Link>
                    </li>
                    <li className="nav-item"></li>
                  </ul>
                </li>
                <li className="nav-item">
                <hr className="d-md-none bg-secondary"/>
                  <strong className="nav-link fw-bold text-white">
                    Nosotros
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="Nosotros#proyecto-educativo"
                      >
                        Proyecto Educativo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="Nosotros#organigrama-institucional"
                      >
                        Organigrama Institucional
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="Nosotros#pie">
                        Equipo PIE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="Nosotros#cati">
                        Equipo CATI
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                <hr className="d-md-none bg-secondary"/>
                  <strong className="nav-link fw-bold text-white">
                    Comunidad Educativa
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#centro-padres"
                      >
                        Centro de Padres
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#centro-estudiantes"
                      >
                        Centro de Estudiantes
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#convivencia-escolar"
                      >
                        Convivencia Escolar
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr className="d-md-none bg-secondary"/>
              <p className="mt-2 pt-2 mt-md-5 pt-md-5">
                Centro Educativo Héroe Arturo Pérez Canto © 2023
              </p>
              <hr className="d-md-none bg-secondary"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
