import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import useWindowSize from "../hooks/useWindowSize";

export default function Evaluaciones({ evaluaciones }) {
  const size = useWindowSize().width; //esta función devuelve el ancho de la pantalla

  const [asignatura, setAsignatura] = useState("");
  const [curso, setCurso] = useState("");
  const [profesor, setProfesor] = useState("");
  const [evaluacionesFiltradas, setEvaluacionesFiltradas] =
    useState(evaluaciones);
  const [mensaje, setMensaje] = useState("");
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = size >= 768 ? 5 : 3; //determina cuántos elementos se muestran en cada página

  const asignaturasUnicas = Array.from(
    new Set(evaluaciones.map((evaluacion) => evaluacion.asignatura))
  );
  const cursosUnicos = Array.from(
    new Set(evaluaciones.map((evaluacion) => evaluacion.curso))
  );
  const profesoresUnicos = Array.from(
    new Set(evaluaciones.map((evaluacion) => evaluacion.profesor))
  );

  function handleAsignaturaChange(event) {
    setAsignatura(event.target.value);
  }

  function handleCursoChange(event) {
    setCurso(event.target.value);
  }

  function handleProfesorChange(event) {
    setProfesor(event.target.value);
  }

  function handleFilter() {
    const filtered = evaluaciones.filter((evaluacion) => {
      return (
        evaluacion.asignatura
          .toLowerCase()
          .includes(asignatura.toLowerCase()) &&
        evaluacion.curso.toLowerCase().includes(curso.toLowerCase()) &&
        evaluacion.profesor.toLowerCase().includes(profesor.toLowerCase())
      );
    });
    setEvaluacionesFiltradas(filtered);
    if (filtered.length === 0) {
      setMensaje("Su búsqueda no tiene reaultados");
    } else {
      setMensaje("");
    }
    setCurrentPage(0);
  }
  function handleOrdenar(e) {
    e.preventDefault();
    const ordenado = [...evaluacionesFiltradas].sort((a, b) => {
      if (ordenAscendente) {
        return new Date(a.fecha) - new Date(b.fecha);
      } else {
        return new Date(b.fecha) - new Date(a.fecha);
      }
    });
    setEvaluacionesFiltradas(ordenado);
    setOrdenAscendente(!ordenAscendente);
  }
  const paginatedEvaluaciones = evaluacionesFiltradas.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleLimpiarFiltros = (e) => {
    e.preventDefault();
    setAsignatura("");
    setCurso("");
    setProfesor("");
    setEvaluacionesFiltradas(evaluaciones);
    setMensaje("");
  };

  const handleLogoClick = (profesor, asignatura, contenido, fecha, bloque) => {
    Swal.fire({
      html: `<h2>${profesor} - ${asignatura} </h2> <hr /> <br /> <h4> ${contenido}</h4><hr /> <br /><p>  ${fecha} ${bloque}</p>`,
    });
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 768 ? "#ede6db" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row py-4 p-md-5 mx-md-5"
              style={{ backgroundColor: "#ede6db" }}
            >
              <div className="col-12 col-md-6 text-center text-md-start px-md-5">
                <h2>
                  "No te pierdas ninguna evaluación: Calendario de fechas
                  importantes"
                </h2>
                <hr />
                <p>
                  "Encuentra todas las fechas importantes en un solo lugar: usa
                  esta tabla para ver las fechas de evaluación, los trabajos y
                  los proyectos para el año escolar".
                </p>
                <hr />
                La tabla de calendario de evaluaciones es una herramienta muy
                útil para que puedas visualizar de forma rápida las fechas y
                detalles de tus evaluaciones en el centro educacional Héroe
                Arturo Pérez Canto. En la primera columna de la tabla, se
                muestran los nombres de las asignaturas. En la primera fila, se
                muestran las fechas de las evaluaciones.
                <hr />
                <form>
                  <label className="mb-3 me-4">
                    Asignatura:
                    <select
                      className="form-select"
                      value={asignatura}
                      onChange={handleAsignaturaChange}
                    >
                      <option defaultValue="">
                        Todas las asignaturas
                      </option>
                      {asignaturasUnicas.map((asignatura) => (
                        <option key={asignatura} value={asignatura}>
                          {asignatura}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="mb-3 me-4">
                    Curso:
                    <select
                      className="form-select"
                      value={curso}
                      onChange={handleCursoChange}
                    >
                      <option defaultValue="">
                        Todos los cursos
                      </option>
                      {cursosUnicos.map((curso) => (
                        <option key={curso} value={curso}>
                          {curso}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="mb-3 me-4">
                    Profesor:
                    <select
                      className="form-select"
                      value={profesor}
                      onChange={handleProfesorChange}
                    >
                      <option defaultValue="">
                        Todos los profesores
                      </option>
                      {profesoresUnicos.map((profesor) => (
                        <option key={profesor} value={profesor}>
                          {profesor}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    className="btn btn-outline-secondary mb-3 me-4"
                    type="button"
                    onClick={handleFilter}
                  >
                    Filtrar
                  </button>
                  <button
                    className="btn btn-outline-secondary mb-3"
                    onClick={handleLimpiarFiltros}
                  >
                    Limpiar filtros
                  </button>
                </form>
              </div>
              <div className="col-12 col-md-6 p-0 m-0">
                {mensaje && <p>{mensaje}</p>}
                <table
                  className="table table-sm table-striped table-hover"
                  style={{ overflow: "hidden" }}
                >
                  <thead className="table-dark small">
                    <tr>
                      <th scope="col">Tipo de evaluación</th>
                      <th scope="col">Curso</th>
                      <th scope="col">Profesor</th>
                      <th scope="col">
                        Fecha
                        <p onClick={handleOrdenar}>
                          {ordenAscendente ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                          ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                          )}
                        </p>
                      </th>
                      <th scope="col">descripcion</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {paginatedEvaluaciones.map((evaluacion, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          {size <= 768
                            ? evaluacion.asignatura
                            : evaluacion.tipo + " - " + evaluacion.asignatura}
                        </td>
                        <td>{evaluacion.curso}</td>
                        <td>{evaluacion.profesor}</td>
                        <td>{evaluacion.fecha}</td>
                        <td>
                          <p
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              handleLogoClick(
                                evaluacion.profesor,
                                evaluacion.asignatura,
                                evaluacion.contenido,
                                evaluacion.fecha,
                                evaluacion.horario
                              )
                            }
                          >
                            <small> Ver Contenido</small>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  <ReactPaginate
                    pageCount={Math.ceil(
                      evaluacionesFiltradas.length / ITEMS_PER_PAGE
                    )}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                    breakLabel={"..."}
                    onPageChange={({ selected }) => setCurrentPage(selected)}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
