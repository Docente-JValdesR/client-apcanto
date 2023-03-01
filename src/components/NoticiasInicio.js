import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NoticiasInicio({ news }) {
  return (
    <div className="d-flex align-items-center">
      <div
        className="container"
        style={{ backgroundColor: "#e0d8b0" }}
      >
        <div className="row justify-content-around  p-md-5 m-md-5">
          <div className="col-12 col-md-5 text-center text-md-start order-0 my-3 my-md-0" >
            <h2>Noticias de Heroe Arturo Perez Canto: Mantente Informado</h2>
            <h4>
              Todo lo que necesitas saber sobre la vida escolar y eventos
              importantes
            </h4>
            <p>
              Bienvenido a la sección de noticias de Heroe Arturo Perez Canto.
              Aquí encontrarás información actualizada sobre la vida escolar y
              eventos importantes en nuestro centro educativo. Mantente
              informado sobre lo que está sucediendo en la comunidad escolar y
              no te pierdas ninguna oportunidad de participar y estar
              involucrado.
            </p>
            <div className="text-center justify-content-center d-none d-md-flex">
              <Link className="btn btn-dark" to="Noticias">
                Leer mas...
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-7 align-self-center mt-md-3 order-1 my-3 my-md-0">
            <Carousel
              interval={5000}
              indicators={false}
              controls={false}
              fade
              className="d-flex"
            >
              {news.slice(0, 5).map((item,) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.imagen}
                    alt={item.titulo}
                  />
                  <Carousel.Caption>
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="text-center justify-content-center d-flex d-md-none my-3">
              <Link className="btn btn-dark" to="Noticias">
                Leer mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
