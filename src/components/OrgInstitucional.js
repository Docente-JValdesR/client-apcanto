import { useState } from "react";
import ListaPersonas from "./ListarPersonas";
import useWindowSize from "../hooks/useWindowSize";

function Organigrama() {
  const size = useWindowSize().width;

  const [departamentoSeleccionado, setDepartamentoSeleccionado] =
    useState(null);
  const [cargoSeleccionado, setCargoSeleccionado] = useState(null);

  const handleDepartamentoSeleccionado = (departamento) => {
    setDepartamentoSeleccionado(departamento);
    setCargoSeleccionado(null);
  };

  const handleCargoSeleccionado = (cargo) => {
    setCargoSeleccionado(cargo);
  };

  const renderizarCargos = () => {
    if (!departamentoSeleccionado) {
      return null;
    }

    // Aquí definirías un objeto con los cargos por departamento

    const cargosPorDepartamento = {
      "Equipo de Gestion": [
        "Director",
        "UTP",
        "Inspector General",
        "Coordinador CATI",
        "Coordinador PIE",
        "Encargado de convivencia",
      ],
      "Cuerpo Docente": [
        "Docente Tutor",
        "Docente de Basica",
        "Docentes por especialidad",
        "CRA y Enlaces",
      ],
      Paradocentes: [
        "Asistentes de la educacion",
        "Inspectores de patio",
        "Varios",
      ],
      Auxiliares: [
        "Auxiliares de aseo y ornato",
        "Auxiliares de mantencion y cuidado",
      ],
    };

    const cargos = cargosPorDepartamento[departamentoSeleccionado];
    const personas = [
      {
        nombre: "Juan Pérez",
        departamento: "Equipo de Gestion",
        cargo: "Director",
        imagen: "https://i.pravatar.cc/300?img=1",
        descripcion:
          "Juan es el director del equipo de gestión, responsable de liderar y coordinar todas las actividades...",
      },
      {
        nombre: "María Gómez",
        departamento: "Equipo de Gestion",
        cargo: "Director",
        imagen: "https://i.pravatar.cc/300?img=2",
        descripcion:
          "María es la directora del equipo de gestión, responsable de liderar y coordinar todas las actividades...",
      },
      {
        nombre: "Pedro González",
        departamento: "Equipo de Gestion",
        cargo: "UTP",
        imagen: "https://i.pravatar.cc/300?img=3",
        descripcion:
          "Pedro es el UTP del equipo de gestión, responsable de la planificación y supervisión del área técnico-pedagógica...",
      },
      {
        nombre: "Ana Torres",
        departamento: "Equipo de Gestion",
        cargo: "UTP",
        imagen: "https://i.pravatar.cc/300?img=4",
        descripcion:
          "Ana es la UTP del equipo de gestión, responsable de la planificación y supervisión del área técnico-pedagógica...",
      },
      {
        nombre: "Jorge Fernández",
        departamento: "Equipo de Gestion",
        cargo: "Inspector General",
        imagen: "https://i.pravatar.cc/300?img=5",
        descripcion:
          "Jorge es el Inspector General del equipo de gestión, responsable de supervisar el cumplimiento de las normativas...",
      },
      {
        nombre: "Lucía Martínez",
        departamento: "Equipo de Gestion",
        cargo: "Inspector General",
        imagen: "https://i.pravatar.cc/300?img=6",
        descripcion:
          "Lucía es la Inspector General del equipo de gestión, responsable de supervisar el cumplimiento de las normativas...",
      },
      {
        nombre: "Andrés Gutiérrez",
        departamento: "Equipo de Gestion",
        cargo: "Coordinador CATI",
        imagen: "https://i.pravatar.cc/300?img=7",
        descripcion:
          "Andrés es el Coordinador CATI del equipo de gestión, responsable de coordinar el Centro de Atención de Tecnologías...",
      },
      {
        nombre: "Carmen López",
        departamento: "Equipo de Gestion",
        cargo: "Coordinador CATI",
        imagen: "https://i.pravatar.cc/300?img=8",
        descripcion:
          "Carmen es la Coordinadora CATI del equipo de gestión, responsable de coordinar el Centro de Atención de Tecnologías...",
      },
      {
        nombre: "Luisa Díaz",
        departamento: "Equipo de Gestion",
        cargo: "Coordinador PIE",
        imagen: "https://i.pravatar.cc/300?img=9",
        descripcion:
          "Luisa es la Coordinadora PIE del equipo de gestión, responsable de coordinar el Programa de Integración Escolar...",
      },
      {
        nombre: "Roberto Sánchez",
        departamento: "Equipo de Gestion",
        cargo: "Coordinador PIE",
        imagen: "https://i.pravatar.cc/300?img=10",
        descripcion:
          "Roberto es el Coordinador PIE del equipo de gestión, responsable de coordinar el Programa de Integración Escolar...",
      },
      {
        nombre: "Sofía Ramírez",
        departamento: "Equipo de Gestion",
        cargo: "Encargado de convivencia",
        imagen: "https://i.pravatar.cc/300?img=11",
        descripcion:
          "Sofía es la Encargada de convivencia del equipo de gestión, responsable de fomentar un ambiente de respeto y diálogo...",
      },
      {
        nombre: "Gabriel Hernández",
        departamento: "Equipo de Gestion",
        cargo: "Encargado de convivencia",
        imagen: "https://i.pravatar.cc/300?img=12",
        descripcion:
          "Gabriel es el Encargado de convivencia del equipo de gestión, responsable de fomentar un ambiente de respeto y diálogo...",
      },
      {
        nombre: "Jorge Sánchez",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=21",
        descripcion:
          "Jorge es un Docente Tutor en el área de Matemáticas, con más de 10 años de experiencia en la educación...",
      },
      {
        nombre: "María González",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=22",
        descripcion:
          "María es una Docente Tutor en el área de Lenguaje, con más de 8 años de experiencia en la educación...",
      },
      {
        nombre: "Juan Pérez",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=23",
        descripcion:
          "Juan es un Docente Tutor en el área de Historia, con más de 5 años de experiencia en la educación...",
      },
      {
        nombre: "Laura Montes",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=24",
        descripcion:
          "Laura es una Docente Tutor en el área de Ciencias, con más de 7 años de experiencia en la educación...",
      },
      {
        nombre: "Luis Hernández",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=25",
        descripcion:
          "Luis es un Docente Tutor en el área de Inglés, con más de 6 años de experiencia en la educación...",
      },
      {
        nombre: "Carla Gómez",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=26",
        descripcion:
          "Carla es una Docente Tutor en el área de Música, con más de 4 años de experiencia en la educación...",
      },
      {
        nombre: "Pedro Ruiz",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=27",
        descripcion:
          "Pedro es un Docente Tutor en el área de Educación Física, con más de 9 años de experiencia en la educación...",
      },
      {
        nombre: "Carmen López",
        departamento: "Cuerpo Docente",
        cargo: "Docente Tutor",
        imagen: "https://i.pravatar.cc/300?img=28",
        descripcion:
          "Carmen es una Docente Tutor en el área de Tecnología, con más de 3 años de experiencia en la educación...",
      },
      {
        nombre: "Ana María",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1011/200/200",
        descripcion:
          "Lleva 20 años enseñando en distintas escuelas de la ciudad. Es experta en educación primaria y tiene una gran pasión por enseñar a los niños.",
      },
      {
        nombre: "Juan Pablo",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1012/200/200",
        descripcion:
          "Lleva 10 años enseñando en distintas escuelas de la ciudad. Es experto en enseñanza de matemáticas y le apasiona la educación de los niños.",
      },
      {
        nombre: "María José",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1015/200/200",
        descripcion:
          "Lleva 15 años enseñando en distintas escuelas de la ciudad. Es experta en enseñanza de lenguaje y le encanta trabajar con los niños más pequeños.",
      },
      {
        nombre: "Fernanda",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1016/200/200",
        descripcion:
          "Lleva 8 años enseñando en distintas escuelas de la ciudad. Es experta en educación artística y siempre busca formas creativas de enseñar a sus estudiantes.",
      },
      {
        nombre: "Javier",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1019/200/200",
        descripcion:
          "Lleva 12 años enseñando en distintas escuelas de la ciudad. Es experto en educación física y le encanta motivar a sus estudiantes a ser más activos y saludables.",
      },
      {
        nombre: "Isabel",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1020/200/200",
        descripcion:
          "Lleva 6 años enseñando en distintas escuelas de la ciudad. Es experta en enseñanza de ciencias naturales y le apasiona ayudar a los estudiantes a descubrir el mundo que les rodea.",
      },
      {
        nombre: "Pedro",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1025/200/200",
        descripcion:
          "Lleva 4 años enseñando en distintas escuelas de la ciudad. Es experto en enseñanza de historia y geografía, y siempre busca maneras de hacer que sus estudiantes se interesen por la materia.",
      },
      {
        nombre: "Carla",
        departamento: "Cuerpo Docente",
        cargo: "Docente de Basica",
        imagen: "https://picsum.photos/id/1025/200/200",
        descripcion:
          "Lleva 4 años enseñando en distintas escuelas de la ciudad. Es experto en enseñanza de historia y geografía, y siempre busca maneras de hacer que sus estudiantes se interesen por la materia.",
      },
      {
        nombre: "Laura González",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/women/11.jpg",
        descripcion: "Licenciada en Educación con especialidad en Matemáticas",
      },
      {
        nombre: "Juan Martínez",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/men/23.jpg",
        descripcion: "Ingeniero en Sistemas y especialista en programación",
      },
      {
        nombre: "Ana Pérez",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/women/31.jpg",
        descripcion:
          "Licenciada en Educación con especialidad en Ciencias Sociales",
      },
      {
        nombre: "Pedro García",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/men/43.jpg",
        descripcion: "Licenciado en Historia y experto en cultura prehispánica",
      },
      {
        nombre: "Carolina Ruiz",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/women/55.jpg",
        descripcion:
          "Licenciada en Educación con especialidad en Lengua y Literatura",
      },
      {
        nombre: "Luis Mendoza",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/men/67.jpg",
        descripcion: "Licenciado en Educación Física y entrenador de atletismo",
      },
      {
        nombre: "María Torres",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/women/78.jpg",
        descripcion:
          "Licenciada en Educación con especialidad en Artes Visuales",
      },
      {
        nombre: "David Sánchez",
        departamento: "Cuerpo Docente",
        cargo: "Docentes por especialidad",
        imagen: "https://randomuser.me/api/portraits/men/89.jpg",
        descripcion: "Licenciado en Música y experto en piano clásico",
      },
      {
        nombre: "Juan Perez",
        departamento: "Cuerpo Docente",
        cargo: "CRA y Enlaces",
        imagen: "https://i.pravatar.cc/300?img=12",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        nombre: "Ana Rodriguez",
        departamento: "Cuerpo Docente",
        cargo: "CRA y Enlaces",
        imagen: "https://i.pravatar.cc/300?img=25",
        descripcion:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        nombre: "Marcela Fernandez",
        departamento: "Paradocentes",
        cargo: "Asistente de la educacion",
        imagen: "https://i.pravatar.cc/300?img=38",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        nombre: "Pedro Gonzalez",
        departamento: "Paradocentes",
        cargo: "Asistentes de la educacion",
        imagen: "https://i.pravatar.cc/300?img=45",
        descripcion:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        nombre: "Carla Morales",
        departamento: "Paradocentes",
        cargo: "Asistentes de la educacion",
        imagen: "https://i.pravatar.cc/300?img=22",
        descripcion:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        nombre: "Luisa Gomez",
        departamento: "Paradocentes",
        cargo: "Asistentes de la educacion",
        imagen: "https://i.pravatar.cc/300?img=11",
        descripcion:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        nombre: "Josefa Castro",
        departamento: "Paradocentes",
        cargo: "Asistentes de la educacion",
        imagen: "https://i.pravatar.cc/300?img=24",
        descripcion:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        nombre: "Carlos Ramirez",
        departamento: "Paradocentes",
        cargo: "Asistentes de la educacion",
        imagen: "https://i.pravatar.cc/300?img=36",
        descripcion:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        nombre: "Juan Pérez",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=5",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "María González",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=10",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Pedro Ramírez",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=20",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Carla Silva",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=15",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Jorge Hernández",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=25",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Lorena Torres",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=30",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Mario Gómez",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=35",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Ana Flores",
        departamento: "Paradocentes",
        cargo: "Inspectores de patio",
        imagen: "https://i.pravatar.cc/300?img=40",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis magna vel mi feugiat egestas. Sed non lorem eu nisi interdum dignissim.",
      },
      {
        nombre: "Lorena Soto",
        departamento: "Paradocentes",
        cargo: "Varios",
        imagen:
          "https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565_960_720.jpg",
        descripcion: "Encargada de biblioteca y recursos educativos",
      },
      {
        nombre: "Andres Silva",
        departamento: "Paradocentes",
        cargo: "Varios",
        imagen:
          "https://cdn.pixabay.com/photo/2015/09/18/21/22/people-948309_960_720.jpg",
        descripcion: "Encargado de mantenimiento de jardines y áreas verdes",
      },
      {
        nombre: "Ana Gonzalez",
        departamento: "Paradocentes",
        cargo: "Varios",
        imagen:
          "https://cdn.pixabay.com/photo/2015/07/31/15/02/people-869176_960_720.jpg",
        descripcion: "Asistente administrativa",
      },
      {
        nombre: "Gabriel Hernandez",
        departamento: "Paradocentes",
        cargo: "Varios",
        imagen:
          "https://cdn.pixabay.com/photo/2018/03/13/16/13/people-3229369_960_720.jpg",
        descripcion: "Encargado de seguridad escolar",
      },
      {
        nombre: "Pedro García",
        departamento: "Auxiliares",
        cargo: "Auxiliares de aseo y ornato",
        imagen: "https://randomuser.me/api/portraits/men/11.jpg",
        descripcion: "Descripción del Auxiliar de Aseo y Ornato Pedro García",
      },
      {
        nombre: "Ana López",
        departamento: "Auxiliares",
        cargo: "Auxiliares de aseo y ornato",
        imagen: "https://randomuser.me/api/portraits/women/22.jpg",
        descripcion: "Descripción del Auxiliar de Aseo y Ornato Ana López",
      },
      {
        nombre: "Luisa González",
        departamento: "Auxiliares",
        cargo: "Auxiliares de aseo y ornato",
        imagen: "https://randomuser.me/api/portraits/women/33.jpg",
        descripcion: "Descripción del Auxiliar de Aseo y Ornato Luisa González",
      },
      {
        nombre: "Jorge Fernández",
        departamento: "Auxiliares",
        cargo: "Auxiliares de aseo y ornato",
        imagen: "https://randomuser.me/api/portraits/men/45.jpg",
        descripcion:
          "Descripción del Auxiliar de Aseo y Ornato Jorge Fernández",
      },
      {
        nombre: "Juan Pérez",
        departamento: "Auxiliares",
        cargo: "Auxiliares de mantencion y cuidado",
        imagen: "https://randomuser.me/api/portraits/men/1.jpg",
        descripcion:
          "Encargado de la mantención de las instalaciones del colegio",
      },
      {
        nombre: "María González",
        departamento: "Auxiliares",
        cargo: "Auxiliares de mantencion y cuidado",
        imagen: "https://randomuser.me/api/portraits/women/2.jpg",
        descripcion: "Encargada de la limpieza de las salas de clases",
      },
      {
        nombre: "Pedro García",
        departamento: "Auxiliares",
        cargo: "Auxiliares de mantencion y cuidado",
        imagen: "https://randomuser.me/api/portraits/men/3.jpg",
        descripcion: "Encargado de la reparación de los equipos informáticos",
      },
      {
        nombre: "Luisa Fernández",
        departamento: "Auxiliares",
        cargo: "Auxiliares de mantencion y cuidado",
        imagen: "https://randomuser.me/api/portraits/women/4.jpg",
        descripcion:
          "Encargada del cuidado y mantenimiento de los jardines del colegio",
      },
    ];
    return (
      <>
        <div className="col-12 col-md-3 text-center">
          <h4>Cargos</h4>
          <ul className="nav flex-column">
            {cargos.map((cargo) => (
              <li
                className={`align-self-center nav-item ${
                  cargo === cargoSeleccionado ? "active active-dept" : ""
                }`}
                key={cargo}
              >
                <p
                  className="nav-link text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCargoSeleccionado(cargo)}
                >
                  {cargo}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-9 align-self-center">
          <ListaPersonas
            personas={personas}
            departamentoSeleccionado={departamentoSeleccionado}
            cargoSeleccionado={cargoSeleccionado}
          />
        </div>
      </>
    );
  };
  const departamentos = [
    "Equipo de Gestion",
    "Cuerpo Docente",
    "Paradocentes",
    "Auxiliares",
  ];
  return (
    <div className="container">
      <div className="row"
      style={{ backgroundColor: size <= 768 ? "#b7f0fa" : "#fff" }}>
        <div className="d-flex-align-items-center">
          <div className="container">
            <div
              className="row text-center text-md-start py-4 p-md-5 mx-md-5 justify-content-around"
              style={{ backgroundColor: "#b7f0fa" }}
            >
              <div className="col-12">
                <h3>Selecciona el tipo de funcionario</h3>
                <ul className="nav">
                  {departamentos.map((departamento) => (
                    <li
                      key={departamento}
                      className={`nav-item ${
                        departamento === departamentoSeleccionado
                          ? "active active-dept"
                          : ""
                      }`}
                    >
                      <p
                        className="nav-link text-dark"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleDepartamentoSeleccionado(departamento)
                        }
                      >
                        {departamento}
                      </p>
                    </li>
                  ))}
                </ul>
                <hr className="bg-dark" />
              </div>
              {renderizarCargos()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organigrama;
