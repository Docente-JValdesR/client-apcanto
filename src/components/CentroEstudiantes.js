import { useState } from "react";
import ReactPaginate from "react-paginate";
import useWindowSize from "../hooks/useWindowSize";

const CentroDeEstudiantes = () => {
  const size = useWindowSize().width;

  const integrantes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      cargo: "presidente",
      correo: "juan.perez@example.com",
      curso: "4to medio",
      imagen: "https://randomuser.me/api/portraits/men/1.jpg",
      descripcion:
        "Estudiante destacado y líder del centro de alumnos. Comprometido con la promoción del bienestar y la participación de los estudiantes en el colegio.",
    },
    {
      id: 2,
      nombre: "María Sánchez",
      cargo: "vicepresidenta",
      correo: "maria.sanchez@example.com",
      curso: "4to medio",
      imagen: "https://randomuser.me/api/portraits/women/2.jpg",
      descripcion:
        "Estudiante comprometida con la promoción de la diversidad y el diálogo en el colegio. Colaboradora en iniciativas para mejorar la convivencia escolar.",
    },
    {
      id: 3,
      nombre: "Pedro González",
      cargo: "delegado",
      correo: "pedro.gonzalez@example.com",
      curso: "3ro medio",
      imagen: "https://randomuser.me/api/portraits/men/3.jpg",
      descripcion:
        "Estudiante participativo y responsable, comprometido con la representación de los intereses y necesidades de su curso en el centro de alumnos.",
    },
    {
      id: 4,
      nombre: "Ana Torres",
      cargo: "secretaria",
      correo: "ana.torres@example.com",
      curso: "2do medio",
      imagen: "https://randomuser.me/api/portraits/women/4.jpg",
      descripcion:
        "Estudiante organizada y colaboradora, encargada de llevar un registro detallado de las actividades y reuniones del centro de alumnos.",
    },
    {
      id: 5,
      nombre: "Diego Ramirez",
      cargo: "tesorero",
      correo: "diego.ramirez@example.com",
      curso: "1ro medio",
      imagen: "https://randomuser.me/api/portraits/men/5.jpg",
      descripcion:
        "Estudiante responsable y comprometido con la administración responsable y transparente de los recursos del centro de alumnos.",
    },
    {
      id: 6,
      nombre: "Laura Gómez",
      cargo: "encargada de comunicaciones",
      correo: "laura.gomez@example.com",
      curso: "1ro medio",
      imagen: "https://randomuser.me/api/portraits/women/6.jpg",
      descripcion:
        "Estudiante creativa y comunicativa, encargada de difundir las actividades y propuestas del centro de alumnos a través de diversos canales y medios.",
    },
  ];
  const integrantesPorPagina = size >= 768 ? 2 : 1;
  const [pageNumber, setPageNumber] = useState(0); // número de página actual

  const pageCount = Math.ceil(integrantes.length / integrantesPorPagina); // cantidad de páginas necesarias

  const integrantesPorPaginaArray = integrantes.slice(
    pageNumber * integrantesPorPagina,
    (pageNumber + 1) * integrantesPorPagina
  );

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 768 ? "#baa6ab" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row py-4 p-md-5 mx-md-5 justify-content-around text-center"
              style={{ backgroundColor: "#baa6ab  " }}
            >
              <div className="col-12 col-md-6 order-1 order-md-0">
                <h3 className="mb-4">Integrantes del Centro de Estudiantes</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {integrantesPorPaginaArray.map((integrante) => (
                    <div key={integrante.id}>
                      <div className="card border-secondary text-bg-secondary mb-3">
                        <div className="card-header">{integrante.cargo}</div>
                        <img
                          src={integrante.imagen}
                          className="card-img-top"
                          alt={integrante.name}
                        />
                        <div className="card-body py-0">
                          <h5 className="card-title">
                            {integrante.nombre} - {integrante.curso}
                          </h5>
                          <p className="card-text">{integrante.descripcion}</p>
                        </div>
                        <div className="card-footer py-0">
                          <p className="card-text">{integrante.correo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Siguiente"}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName="active"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName={"page-link"}
                  nextLinkClassName={"page-link"}
                  nextClassName="page-item"
                  disabledClassName={"disabled"}
                />
              </div>
              <div className="col-12 col-md-6 order-0 order-md-1 text-center text-md-end">
                <h2 className="mb-4">
                  Centro de Estudiantes del Centro Educativo Héroe Arturo Pérez
                  Canto
                </h2>
                <p className="mb-4">
                  El Centro de Estudiantes es una organización conformada por
                  alumnos y alumnas de nuestro colegio, cuyo objetivo es
                  fomentar la participación activa y colaborativa en el proceso
                  educativo de nuestros estudiantes. Entre sus funciones se
                  encuentran promover la comunicación y el diálogo entre la
                  comunidad educativa, apoyar iniciativas y actividades que
                  contribuyan al bienestar de los alumnos, y representar los
                  intereses y necesidades de los estudiantes ante el colegio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroDeEstudiantes;
