import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ActividadesInicio({ actividades }) {
  return (
    <div className="d-flex align-items-center">
      <div className="container" style={{ backgroundColor: "#f4bdbc" }}>
        <div className="row justify-content-around p-md-5 m-md-5">
          <div className="col-12 col-md-5  align-self-center text-center text-md-start my-3 my-md-0">
            <h2>
              Actividades Recientes: Descubre Lo Que Está Sucediendo en Heroe
              Arturo Perez Canto
            </h2>

            <h4>
              Una mirada a las experiencias de la comunidad educativa dentro y
              fuera del centro
            </h4>

            <p>
              Bienvenido a la sección de Actividades Recientes de Heroe Arturo
              Perez Canto. Aquí encontrarás información sobre las últimas
              actividades en las que ha participado la comunidad educativa,
              tanto dentro como fuera del centro. Descubre lo que está
              sucediendo en la vida escolar y sé parte de la experiencia de la
              comunidad educativa en Heroe Arturo Perez Canto.
            </p>
            <div className="text-center justify-content-center d-none d-md-flex">
              <Link
                className="btn btn-dark"
                to="ActividadesExtracurriculares"
              >
                Leer mas...
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-7 align-self-center my-3 my-md-0">
            <Carousel
              interval={5000}
              indicators={false}
              controls={false}
              fade
              className="d-flex"
            >
              {actividades.slice(0, 3).map((activity, index) => (
                <Carousel.Item key={index}>
                  <Image
                    src={activity.imagenes[1]}
                    alt={activity.description}
                    fluid
                    className="activity-image d-block w-100"
                  />
                  <Carousel.Caption>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="text-center justify-content-center d-md-none d-flex my-3 ">
              <Link
                className="btn btn-dark"
                to="ActividadesExtracurriculares"
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
