import { useState } from "react";
import { Carousel } from "react-bootstrap";
import backgroundInicio from "../assets/background.jpg";
import firstImage from "../assets/banner1.jpg";
import secondImage from "../assets/banner2.jpg";
import thirdImage from "../assets/banner3.jpg";

const BannerInicio = () => {
  // estado y funcion que controla el slider del banner
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url(${backgroundInicio})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        zIndex: -1,
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
      }}
      id="inicio"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-none d-md-flex align-items-center"
            style={{ zIndex: 1 }}
          >
            {/*slider del carousel*/}
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              controls={false}
              variant="dark"
              fade
              style={{ zIndex: 2 }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src={firstImage}
                  alt="First slide"
                  style={{ filter: "brightness(0.7)" }}
                />
                <Carousel.Caption>
                  <h3 className="text-white fw-bold">
                    Conoce nuestro proyecto Educativo,
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src={secondImage}
                  alt="Second slide"
                  style={{ filter: "brightness(0.7)" }}
                />
                <Carousel.Caption>
                  <h3 className="text-white fw-bold">
                    o Descubre nuevas noticas / actividades
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src={thirdImage}
                  alt="Third slide"
                  style={{ filter: "brightness(0.7)" }}
                />
                <Carousel.Caption>
                  <h3 className="text-white fw-bold">
                    incluso puedes conocer a todos nuestros funcionarios
                  </h3>
                  <h1 className="text-white fw-bold">¡aqui en el Canto! </h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            className="col-12 mt-5 mt-md-0 col-md-6 d-flex align-items-center"
            style={{ position: "relative", zIndex: 1 }}
          >
            {/*titulo y parrafo del banner*/}
            <div className="mx-auto text-center text-white px-5">
              <h1 className="display-3 fw-bold">
                Centro Educativo Arturo Pérez Canto
              </h1>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, ex.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore molestias, quia dolores voluptate veniam voluptatem
                cupiditate commodi maxime ut expedita nam quisquam corrupti
                ratione dignissimos explicabo quam, incidunt ipsum!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute "
        style={{
          background: "#000",
          opacity: 0.6,
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      ></div>
    </div>
  );
};

export default BannerInicio;
