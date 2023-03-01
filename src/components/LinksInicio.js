import Swal from "sweetalert2";
import logo1 from "../assets/bdchile-logo.png";
import logo2 from "../assets/beneficiosestudiantiles-logo.png";
import logo3 from "../assets/logo-unesco.jpg";
import logo4 from "../assets/fondocultura-logo.png";
import logo5 from "../assets/junaed-logo.png";
import logo6 from "../assets/logo-recoleta.png";
import logo7 from "../assets/mineduc-logo.png";
import logo8 from "../assets/sence-logo.png";
const logos = [
  {
    src: logo1,
    title: "Título 1",
    description: "Descripción 1",
    link: "https://www.ejemplo1.com",
  },
  {
    src: logo2,
    title: "Título 2",
    description: "Descripción 2",
    link: "https://www.ejemplo2.com",
  },
  {
    src: logo3,
    title: "Título 3",
    description: "Descripción 3",
    link: "https://www.ejemplo3.com",
  },
  {
    src: logo4,
    title: "Título 4",
    description: "Descripción 4",
    link: "https://www.ejemplo4.com",
  },
  {
    src: logo5,
    title: "Título 5",
    description: "Descripción 5",
    link: "https://www.ejemplo5.com",
  },
  {
    src: logo6,
    title: "Título 6",
    description: "Descripción 6",
    link: "https://www.ejemplo6.com",
  },
  {
    src: logo7,
    title: "Título 7",
    description: "Descripción 7",
    link: "https://www.ejemplo7.com",
  },
  {
    src: logo8,
    title: "Título 8",
    description: "Descripción 8",
    link: "https://www.ejemplo8.com",
  },
];
const LinksInicio = () => {


  const handleLogoClick = (logo) => {
    Swal.fire({
      title: logo.title,
      text: logo.description,
      imageUrl: logo.src,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Ir al sitio",
    }).then(function (result) {
      if (result.value) {
        window.open(logo.link, "_blank");
      }
    });
  };

  return (
    <div className="d-flex align-items-center">
      <div className="container py-5" style={{ backgroundColor: "#c4b7de" }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8">
            <h2>Enlaces Recomendados</h2>
            <p>
              Bienvenido a la sección de Enlaces Recomendados de Heroe Arturo
              Perez Canto. Aquí encontrarás una lista de enlaces útiles e
              importantes para la comunidad educativa, como la municipalidad de
              Recoleta, opciones de becas y créditos estudiantiles, y la
              biblioteca digital. Estos enlaces te ayudarán a estar mejor
              informado y a tener acceso a recursos valiosos para tu educación y
              futuro.
            </p>
          </div>
        </div>
        <div className="row px-md-5 mx-md-5">
          {logos.map((logo, index) => (
            <div
              className="col-6 col-md-3 align-self-center text-center "
              key={index}
              onClick={() => handleLogoClick(logo)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={logo.src}
                className="img-fluid "
                alt={logo.title}
                style={{ maxHeight: "100px" }}
              />
              <h4 className="mt-3">{logo.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksInicio;
