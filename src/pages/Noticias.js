import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import useWindowSize from "../hooks/useWindowSize";

const NewsSection = ({ news }) => {
  const size = useWindowSize().width; //esta función devuelve el ancho de la pantalla

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = size >= 768 ? 3 : 1; //determina cuántos elementos se muestran en cada página

  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);


  // Get current news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleShowModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 768 ? "#c5c6c8" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row py-4 p-md-5 mx-md-5 justify-content-around text-center"
              style={{ backgroundColor: "#c5c6c8" }}
            >
              <div className="row justify-content-around">
                <div className="col-12 col-md-5 text-center text-md-start">
                  <h2>
                    Últimas noticias del Centro Educacional Héroe Arturo Pérez
                    Canto
                  </h2>
                </div>
                <div className="col-12 col-md-6 text-center text-md-end">
                  <p>
                    Mantente informado sobre las últimas noticias y eventos del
                    Centro Educacional Héroe Arturo Pérez Canto, una institución
                    educativa líder en Chile que se dedica a brindar una
                    educación de calidad a estudiantes de todas las edades.
                    Desde actividades culturales y deportivas hasta noticias
                    destacadas sobre nuestros programas académicos, aquí
                    encontrarás todo lo que necesitas saber sobre nuestro liceo.
                  </p>
                </div>
              </div>

              {currentNews.map((newsItem) => (
                <div key={newsItem.id} className="col-md-4 col-12 mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={newsItem.imagen}
                      alt={newsItem.titulo}
                    />
                    <Card.Body>
                      <Card.Title>{newsItem.titulo}</Card.Title>
                      <Card.Text>{newsItem.descripcion}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleShowModal(newsItem)}
                      >
                        Leer más
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <div className="d-flex justify-content-center">
                <ReactPaginate
                  pageCount={Math.ceil(news.length / newsPerPage)}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  onPageChange={handlePageChange}
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

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedNews && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedNews.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedNews.imagen}
                className="img-fluid mb-3"
                alt={selectedNews.titulo}
              />
              <p>{selectedNews.despcripcion}</p>
              <p>{selectedNews.categoria} - {selectedNews.fecha}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default NewsSection;
