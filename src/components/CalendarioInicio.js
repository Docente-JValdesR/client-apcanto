import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";

const Evento = ({ tipo, asignatura, fecha, contenido, curso }) => {
  const popover = (
    <Popover id={fecha}>
      <Popover.Header as="h3" className="header-popover">
        {tipo} {asignatura}
      </Popover.Header>
      <Popover.Body>
        <p>{fecha}</p>
        <p>{contenido}</p>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={popover}
      rootClose
    >
      <div className="d-flex btn btn-secondary m-1">
        <div>
          {tipo} {asignatura} - {curso}
        </div>
      </div>
    </OverlayTrigger>
  );
};

export default function CalendarioInicio({ evaluaciones }) {
  return (
    <div className="d-flex align-items-center">
      <div className="container" style={{ backgroundColor: "#ead0ad" }}>
        <div className="row justify-content-around p-md-5 m-md-5">
          <div className="col-12 col-md-4 align-self-center order-1 order-md-0 my-3 my-md-0">
            {evaluaciones.slice(0, 5).map((evento, index) => (
              <Evento key={index} {...evento} />
            ))}
            <div className="text-center justify-content-center d-md-none d-flex my-3">
              <Link
                className="btn btn-dark"
                to="CalendarioAcademico"
              >
                Leer mas...
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end order-0 order-md-1 my-3 my-md-0">
            <h2>
              Calendario Académico: Mantente Al Tanto de los Eventos Importantes
            </h2>

            <h4>
              Todas las fechas importantes del año escolar en un solo lugar
            </h4>

            <p>
              Bienvenido a la sección de Calendario Académico de Heroe Arturo
              Perez Canto. Aquí encontrarás una lista actualizada de todos los
              eventos importantes del año escolar, desde exámenes hasta días
              festivos y actividades extracurriculares. Mantente organizado y no
              te pierdas ninguno de los eventos más importantes en nuestro
              centro educativo.
            </p>

            <div className="text-center justify-content-center d-none d-md-flex">
              <Link
                className="btn btn-dark"
                to="CalendarioAcademico"
              >
                Leer mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
