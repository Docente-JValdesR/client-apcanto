import { useState } from 'react';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import useWindowSize from '../hooks/useWindowSize';

function ListaPersonas({ personas, departamentoSeleccionado, cargoSeleccionado }) {
  const [currentPage, setCurrentPage] = useState(0);
  const size = useWindowSize().width; //esta función devuelve el ancho de la pantalla
  const itemsPerPage = size >= 768 ? 3 : 1; //determina cuántos elementos se muestran en cada página

  const handlePersonaClick = (persona) => {
    Swal.fire({
      title: persona.nombre,
      html: `<img class="modal-imagen" src=${persona.imagen} alt=${persona.nombre} /><p class="modal-cargo">${persona.cargo}</p><p class="modal-descripcion">${persona.descripcion}</p>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Cerrar'
    });
    document.body.classList.add('modal-open');
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredPersonas = personas.filter(persona => persona.departamento === departamentoSeleccionado && persona.cargo === cargoSeleccionado);
  const numPages = Math.ceil(filteredPersonas.length / itemsPerPage);
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPersonas.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {cargoSeleccionado ? (
        <div
          className="justify-content-center"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {currentItems.map((persona) => {
            return (
              <div
                key={persona.nombre}
                className="card persona-card col-md-4"
                onClick={() => handlePersonaClick(persona)}
              >
                <img
                  className="card-img-top persona-imagen"
                  src={persona.imagen}
                  alt={persona.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title persona-nombre">
                    {persona.nombre}
                  </h5>
                  <p className="card-text">{persona.cargo}</p>
                </div>
              </div>
            );
          })}
          <div className="col-12">
            <ReactPaginate
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              pageCount={numPages}
              onPageChange={handlePageChange}
              containerClassName={"pagination justify-content-center"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              breakLabel={"..."}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
            />
          </div>
        </div>
      ) : (
        <div className="d-flex align-self-center justify-content-center">
          <p>Selecciona un cargo</p>
        </div>
      )}
    </>
  );
}

export default ListaPersonas;
