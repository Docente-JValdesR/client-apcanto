import { useState } from "react";
import Logo from "../assets/logo.png";
import mision from "../assets/mision.jpg";
import vision from "../assets/vision.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faPeopleCarry,
  faHandshake,
  faUserGraduate,
  faPeopleArrows,
  faLeaf,
  faIndustry,
  faHandHoldingHeart,
  faStar,
  faLightbulb,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import respeto from "../assets/respeto.jpg";
import responsabilidad from "../assets/responsabilidad.jpg";
import solidaridad from "../assets/solidaridad.jpg";
import empatia from "../assets/empatia.jpg";
import tolerancia from "../assets/tolerancia.jpg";

//import Cati from "../../assets/CATI.jpg";
//import ConvivenciaEscolar from "../../assets/Convivenciaescolar.jpg";
//import Pie from "../../assets/PIE.jpg";

export default function ProyectoEducativo() {
  return (
    <div className="container">
      <div className="row">
        <Introduccion />
        <Principios />
        <MisionVision />
        <Sellos />
        <Valores />
      </div>
    </div>
  );
}

const Introduccion = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-around text-center text-md-end py-4 p-md-5 mx-md-5"
        style={{ backgroundColor: "#b0c2f2" }}
      >
        <div className="col-12 col-md-3 d-none d-md-flex align-items-center">
          <img
            src={Logo}
            className="img-fluid "
            style={{
              maxHeight: "300px",
              width: "auto",
            }}
            alt="imagen logo heroe arturo perez canto"
          />
        </div>
        <div className="col-12 col-md-6 text-center text-md-end ">
          <h4>
            "Comprometidos con la educación de calidad: Una revisión del
            Proyecto Educativo Institucional del Centro Educacional 'Héroe
            Arturo Pérez Canto'"
          </h4>
          <p>
            La educación es esencial en nuestras vidas y en las sociedades a las
            que pertenecemos. La familia, la escuela, el trabajo y otras
            instituciones son valiosos espacios para desarrollar nuestro proceso
            educativo. Es importante tener claridad sobre la finalidad de la
            educación y nuestro papel en ella. Dialogar sobre la educación y su
            significado es crucial para un proceso educativo de calidad. Un
            proyecto educativo es un acuerdo y compromiso para alcanzar una
            visión educativa. La calidad de la educación se desarrolla en cada
            persona a medida que asuman su papel responsable. El Proyecto
            Educativo Institucional (PEI) del Centro Educacional "Héroe Arturo
            Pérez Canto" es resultado del trabajo participativo de toda la
            comunidad y es un instrumento de gestión a largo plazo. El PEI se
            construye en torno a dos ejes centrales: el desarrollo de los
            estudiantes y la gestión autónoma y participativa de la institución.
          </p>
        </div>
      </div>
    </div>
  );
};
const Principios = () => {
  const principios = [
    {
      icon: faSchool,
      text: "El rol de la escuela es la transformación del sujeto y su entorno mediante una intervención sistémica, amplia, flexible y comprensiva.",
      color: "#00529f",
    },
    {
      icon: faPeopleCarry,
      text: "La escuela es el espacio de construcción de desarrollo humano en concomitancia con su entorno y comunidad.",
      color: "#6bbb69",
    },
    {
      icon: faHandshake,
      text: "La sana y buena convivencia es el fundamento para el desarrollo del actual proyecto educativo y el logro de sus objetivos.",
      color: "#f0ad4e",
    },
    {
      icon: faUserGraduate,
      text: "El centro de los procesos de gestión del Liceo es al ser humano lo cual permite formar personas críticas, creativas, reflexivas y pensantes.",
      color: "#337ab7",
    },
    {
      icon: faPeopleArrows,
      text: "La formación integral de los estudiantes es el objetivo principal y su formación se basa en la construcción de conocimientos, valores y actitudes.",
      color: "#5bc0de",
    },
  ];
  const [hoveredRow, setHoveredRow] = useState(null);
  const handleMouseEnter = (index) => setHoveredRow(index);
  const handleMouseLeave = () => setHoveredRow(null);
  return (
    <div className="container">
      <div
        className="row justify-content-around text-center text-md-start py-4 p-md-5 mx-md-5"
        style={{ backgroundColor: "#b0f2c2" }}
      >
        <div className="col-12 col-md-5">
          <h2>
            "Principios fundamentales del Proyecto Educativo del Centro
            Educacional Arturo Pérez Canto"
          </h2>
          <p>
            El Centro Educacional Arturo Pérez Canto se rige por unos principios
            claros y coherentes que sustentan su proyecto educativo y conforman
            la base de su comunidad educativa.
            <br />
            Estos principios son la esencia de lo que representa el Centro
            Educacional Arturo Pérez Canto y guían su accionar en el desarrollo
            de su proyecto educativo.
          </p>
        </div>
        <div className="col-12 col-md-5">
          {principios.map((principio, i) => (
            <div
              className="row"
              style={{
                backgroundColor: i % 2 === 0 ? "#94918f" : "#e4dcd7",
                borderRadius:
                  i === 0
                    ? "10px 10px 0 0"
                    : i === principios.length - 1
                    ? "0 0 10px 10px"
                    : "",
                height: hoveredRow === i ? "calc(120px * 1.1)" : "120px",
                transition: "height 0.2s ease-out",
              }}
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="col-3 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={principio.icon}
                  color={principio.color}
                  style={{
                    width: "100px",
                    height: "auto",
                    transform: hoveredRow === i ? "scale(1)" : "scale(0.8)",
                    transition: "transform 0.2s ease-out",
                  }}
                />
              </div>
              <div className="col-9 text-center align-self-center m-0 p-0">
                <p
                  style={{
                    transform: hoveredRow === i ? "scale(1)" : "scale(0.7)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  {principio.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const MisionVision = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-around py-4 p-md-5 mx-md-5"
        style={{ backgroundColor: "#fcb7af" }}
      >
        <div className="row px-md-5">
          <div className="col-12 col-md-5 order-0 py-2 ">
            <h2>Visión. </h2>
            <p>
              Constituirnos en una comunidad educativa inclusiva e
              intercultural, en la cual se promueve el desarrollo integral de
              todas y todos sus estudiantes, en un ambiente de participación y
              convivencia democrática, fundamentada en el respeto y la práctica
              de los derechos humanos, el diálogo, el pensamiento crítico y el
              compromiso por el bien común de los integrantes de las comunidades
              y sociedades de las cuales son parte integrante.
            </p>
          </div>
          <div className="col-12 col-md-6 order-1 py-2">
            <img src={mision} className="img-fluid" alt="comunidad educativa" />
          </div>
        </div>
        <hr className="d-none d-md-flex" />
        <div className="row px-md-5">
          <div className="col-12 col-md-6 order-3 order-md-2 py-2">
            <img
              src={vision}
              alt="futuro de estudiantes"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-5 order-2 order-md-3 py-2 text-md-end">
            <h2>Misión. </h2>
            <p></p>Desde la Educación pública el Centro Educacional “Héroe
            Arturo Pérez Canto” se compromete a promover el desarrollo integral
            de sus estudiantes, valorando su diversidad y multiculturalidad,
            mediante la generación de espacios propicios para el desarrollo
            cultural, artístico y deportivo conforme a sus particulares
            intereses, en el marco de una necesaria convivencia democrática,
            fundamentada en el respeto y la práctica de los derechos humanos, el
            diálogo, el pensamiento crítico y el compromiso por el bien común de
            los integrantes de las comunidades y sociedades de las cuales son
            parte integrante.
          </div>
        </div>
      </div>
    </div>
  );
};
const Sellos = () => {
  const sellos = [
    {
      text: "Reconocimiento por el desempeño sostenible en el medio ambiente.",
      icon: faLeaf,
      color: "#228B22", // Verde oscuro
    },
    {
      text: "Reconocimiento por el desempeño en seguridad y salud en el trabajo.",
      icon: faIndustry,
      color: "#87CEEB", // Azul cielo
    },
    {
      text: "Reconocimiento por el desempeño en responsabilidad social empresarial.",
      icon: faHandHoldingHeart,
      color: "#FF69B4", // Rosado brillante
    },
    {
      text: "Reconocimiento por el desempeño en innovación y calidad.",
      icon: faStar,
      color: "#FFC107", // Amarillo brillante
    },
    {
      text: "Reconocimiento por el desempeño en eficiencia energética.",
      icon: faLightbulb,
      color: "#FFFF00", // Amarillo claro
    },
  ];
  const [hoveredRow, setHoveredRow] = useState(null);
  const handleMouseEnter = (index) => setHoveredRow(index);
  const handleMouseLeave = () => setHoveredRow(null);
  return (
    <div className="container">
      <div
        className="row justify-content-around text-center text-md-start py-4 p-md-5 mx-md-5"
        style={{ backgroundColor: "#d8f8e1" }}
      >
        <div className="col-12 col-md-5">
          <h2>"Sellos Educativos del Proyecto Educativo"</h2>
          <p>
            Los sellos educativos del Proyecto Educativo del Centro Educacional
            Héroe Arturo Pérez Canto reconocen el desempeño y compromiso del
            centro en diferentes áreas, tales como sostenibilidad ambiental,
            seguridad y salud en el trabajo, responsabilidad social empresarial,
            innovación y calidad, y eficiencia energética. <br />
            Cada sello es un reconocimiento a la excelencia y un reflejo del
            compromiso constante del centro educacional para mejorar y
            contribuir al desarrollo sostenible.
          </p>
        </div>
        <div className="col-12 col-md-5">
          {sellos.map((sello, i) => (
            <div
              className="row"
              style={{
                backgroundColor: i % 2 === 0 ? "#94918f" : "e4dcd7",
                borderRadius:
                  i === 0
                    ? "10px 10px 0 0"
                    : i === sello.length - 1
                    ? "0 0 10px 10px"
                    : "",
                height: hoveredRow === i ? "calc(120px * 1.1)" : "120px",
                transition: "height 0.2s ease-out",
              }}
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="col-9 text-center align-self-center p-0 m-0">
                <p
                  style={{
                    transform: hoveredRow === i ? "scale(1)" : "scale(0.7)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  {sello.text}
                </p>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={sello.icon}
                  color={sello.color}
                  style={{
                    width: "100px",
                    height: "auto",
                    transform: hoveredRow === i ? "scale(1)" : "scale(0.8)",
                    transition: "transform 0.2s ease-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Valores = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const valores = [
    {
      titulo: "Respeto",
      imagen: respeto,
      descripcion:
        "El respeto es fundamental para crear un ambiente de confianza y armonía entre los estudiantes, profesores y personal. Además, el respeto a las opiniones y derechos de los demás es esencial para fomentar una convivencia saludable y un aprendizaje significativo.",
    },
    {
      titulo: "Responsabilidad",
      imagen: responsabilidad,
      descripcion:
        "La responsabilidad es un valor clave en la formación de los estudiantes ya que les ayuda a desarrollar la capacidad de tomar decisiones y asumir consecuencias de sus acciones. La responsabilidad también es esencial para fomentar la confianza y el respeto hacia los demás.",
    },
    {
      titulo: "Solidaridad",
      imagen: solidaridad,
      descripcion:
        "La solidaridad es importante ya que promueve la unidad y el trabajo en equipo. La solidaridad también ayuda a fomentar la empatía y el respeto hacia los demás, lo que puede ser esencial para un aprendizaje significativo y una convivencia saludable.",
    },
    {
      titulo: "Empatía",
      imagen: empatia,
      descripcion:
        "La empatía es un valor fundamental en la formación de los estudiantes ya que les permite entender y considerar las perspectivas y sentimientos de los demás. La empatía también ayuda a fomentar la tolerancia y el respeto hacia los demás, lo que puede ser esencial para una convivencia saludable y un aprendizaje significativo.",
    },
    {
      titulo: "Tolerancia",
      imagen: tolerancia,
      descripcion:
        "La tolerancia es importante ya que promueve la aceptación y el respeto hacia las opiniones y creencias de los demás. La tolerancia también ayuda a fomentar la empatía y la solidaridad, lo que puede ser esencial para un aprendizaje significativo y una convivencia saludable.",
    },
  ];

  return (
    <div className="container">
      <div
        className="row  justify-content-around text-center text-md-end py-4 p-md-5 mx-md-5"
        style={{ backgroundColor: "#ffe4e1" }}
      >
        <div className="col-12 col-md-8 text-center ">
          <h2>
            Explora los valores educativos del Centro Educacional Heroe Arturo
            Perez Canto
          </h2>
          <p>
            Conoce más sobre el proyecto educativo del Centro Educacional Heroe
            Arturo Perez Canto a través de su selección de valores. Haz clic en
            cada valor para obtener más información y ver una representación
            visual de cada uno.
          </p>
        </div>
        <div className="col-12 px-md-5">
          <ul className="nav">
            {valores.map((valor, i) => (
              <li className="nav-item" key={i}>
                <p
                  className="nav-link text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedValue(i)}
                >
                  {valor.titulo}
                </p>
              </li>
            ))}
          </ul>
          <hr className="bg-dark" />
        </div>
        <div className="col-12 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 order-1 order-md-0">
                <img
                  src={valores[selectedValue].imagen}
                  alt={valores[selectedValue].titulo}
                  style={{ width: "auto", height: "100%", maxHeight: "400px" }}
                />
              </div>
              <div className="col-12 col-md-4 order-0 order-md-1 text-center align-self-center text-md-end">
                <h3>{valores[selectedValue].titulo}</h3>
                <p>{valores[selectedValue].descripcion}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center py-5">
          <hr />
          <div className="px-md-5">
            <p>
              si quieres conocer todo nuestro proyecto educativo, descargalo
              haciendo click en el icono debajo
            </p>
            <a
              href="https://wwwfs.mineduc.cl/Archivos/infoescuelas/documentos/10252/ProyectoEducativo10252.pdf"
              download
            >
              <FontAwesomeIcon icon={faFilePdf} color={"#ff0000"} size={"3x"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
