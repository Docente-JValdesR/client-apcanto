import { useState } from "react";
import ReactPaginate from "react-paginate";
import useWindowSize from "../hooks/useWindowSize";

const CentroDePadres = () => {
  const size = useWindowSize().width;

  const integrantes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      cargo: "presidente",
      correo: "juan.perez@example.com",
      telefono: "+56 9 1234 5678",
      imagen: "https://randomuser.me/api/portraits/men/1.jpg",
      descripcion:
        "Padre de dos estudiantes de nuestro colegio y activo colaborador en distintas iniciativas de la comunidad educativa.",
    },
    {
      id: 2,
      nombre: "María Sánchez",
      cargo: "tesorera",
      correo: "maria.sanchez@example.com",
      telefono: "+56 9 2345 6789",
      imagen: "https://randomuser.me/api/portraits/women/2.jpg",
      descripcion:
        "Madre de un estudiante de nuestro colegio y comprometida con la promoción de la participación y el diálogo entre los padres y el colegio.",
    },
    {
      id: 3,
      nombre: "Pedro González",
      cargo: "delegado",
      correo: "pedro.gonzalez@example.com",
      telefono: "+56 9 3456 7890",
      imagen: "https://randomuser.me/api/portraits/men/3.jpg",
      descripcion:
        "Madre de un estudiante de nuestro colegio y comprometida con la promoción de la participación y el diálogo entre los padres y el colegio.",
    },
    {
      id: 4,
      nombre: "Ana Torres",
      cargo: "secretaria",
      correo: "ana.torres@example.com",
      telefono: "+56 9 4567 8901",
      imagen: "https://randomuser.me/api/portraits/women/4.jpg",
      descripcion: "",
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
              <div className="col-12 col-md-5 text-center text-md-start">
                <h2 className="mb-4">
                  Centro de Padres del Centro Educativo Héroe Arturo Pérez Canto
                </h2>
                <p className="mb-4">
                  El Centro de Padres es una organización conformada por padres
                  y apoderados de nuestro colegio, cuyo objetivo es fomentar la
                  participación activa y colaborativa en el proceso educativo de
                  nuestros estudiantes. Entre sus funciones se encuentran
                  promover la comunicación y el diálogo entre la comunidad
                  educativa, apoyar iniciativas y actividades que contribuyan al
                  bienestar de los alumnos, y representar los intereses y
                  necesidades de los padres y apoderados ante el colegio.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h3 className="mb-4">Integrantes del Centro de Padres</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {integrantesPorPaginaArray.map((integrante) => (
                    <div key={integrante.id}>
                      <div className="card border-secondary text-bg-secondary mb-3">
                        <div className="card-header">{integrante.cargo}</div>
                        <img
                          src={integrante.imagen}
                          className="card-img-top "
                          alt={integrante.name}
                        />
                        <div className="card-body py-0">
                          <h5 className="card-title">{integrante.name}</h5>
                          <p className="card-text">{integrante.descripcion}</p>
                        </div>
                        <div className="card-footer py-0">
                          <p className="card-text py-0">{integrante.correo}</p>
                          {integrante.telefono}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroDePadres;
