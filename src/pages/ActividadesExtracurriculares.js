import { useState } from "react";
import { Card, Button, Modal, Carousel } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import useWindowSize from "../hooks/useWindowSize";

const ActividadesExtracurriculares = ({ actividades }) => {
  const size = useWindowSize().width; //esta función devuelve el ancho de la pantalla

  const [modalActivo, setModalActivo] = useState(false);
  const [fotos, setFotos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [coordinadores, setCoordinadores] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = size >= 768 ? 3 : 1; //determina cuántos elementos se muestran en cada página

  const pagesVisited = currentPage * itemsPerPage;

  const abrirModal = (actividad) => {
    setFotos(actividad.imagenes);
    setTitulo(actividad.titulo);
    setCoordinadores(actividad.coordinadores);
    setDescripcion(actividad.descripcion);
    setModalActivo(true);
  };

  const cerrarModal = () => {
    setModalActivo(false);
  };

  const displayActividades = actividades
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((actividad, indice) => (
      <div key={indice} className="col-12 col-md-4  mb-4">
        <Card
          onClick={() => abrirModal(actividad)}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={actividad.imagenes[0]} />
          <Card.Body>
            <Card.Title>{actividad.titulo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Coordinadores: {actividad.coordinadores.join(", ")}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    ));

  const pageCount = Math.ceil(actividades.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 768 ? "#ffda9e" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row py-4 p-md-5 mx-md-5 justify-content-around text-center"
              style={{ backgroundColor: "#ffda9e" }}
            >
              <div className="row justify-content-around">
                <div className="col-12 col-md-6 text-center text-md-start order-md-0 order-1">
                  <p>
                    Descubre las actividades más destacadas que se han llevado a
                    cabo en el Centro Educacional Héroe Arturo Pérez Canto, una
                    institución educativa líder en Chile que se dedica a brindar
                    una educación de calidad a estudiantes de todas las edades.
                    Desde competencias deportivas y presentaciones de teatro
                    hasta actividades culturales y celebraciones especiales,
                    aquí encontrarás un resumen de las actividades más
                    relevantes que han tenido lugar en nuestro liceo.
                  </p>
                </div>
                <div className="col-12 col-md-5 text-center text-md-end order-md-1 order-0">
                  <h2>
                    Actividades realizadas en el Centro Educacional Héroe Arturo
                    Pérez Canto
                  </h2>
                </div>
              </div>
              {displayActividades}
              <div className="d-flex justify-content-center">
                <ReactPaginate
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="pagination"
                  activeClassName="active"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  disabledClassName="disabled"
                  previousLabel={"Anterior"}
                  nextLabel={"Siguiente"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalActivo}
        onHide={cerrarModal}
        size={size <= 768 ? "sm" : "lg"}
      >
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={3000}>
            {fotos.map((foto, indice) => (
              <Carousel.Item key={indice}>
                <img
                  src={foto}
                  alt={`Foto ${indice + 1}`}
                  className="img-fluid mb-4"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>
            <strong>Coordinadores:</strong> {coordinadores.join(", ")}
          </p>
          <p>
            <strong>Descripción:</strong> {descripcion}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActividadesExtracurriculares;
