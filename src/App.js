import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import ComEdu from "./pages/ComEdu";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./context/Layout";
import PalabrasDirector from "./components/PalabrasDirectorNosotros";
import ProyectoEducativo from "./components/ProyectoEducativoNosotros";
import OrgInstitucional from "./components/OrgInstitucional";
import Noticias from "./pages/Noticias";
import CalendarioAcademico from "./pages/CalendarioAcademico";
import ActividadesExtracurriculares from "./pages/ActividadesExtracurriculares";
import EquipoCATI from "./components/Cati";
import EquipoPIE from "./components/Pie";
import CentroDePadres from "./components/CentroPadres";
import CentroDeEstudiantes from "./components/CentroEstudiantes";
import Error404 from "./pages/Error404";
export default function App() {
  const news = [
    {
      id: 1,
      titulo: "Lorem Ipsum",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagen: "https://picsum.photos/id/1/800/600",
      fecha: "2022-03-01",
      categoria: "tecnologia",
    },
    {
      id: 2,
      titulo: "Dolor Sit Amet",
      descripcion:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "https://picsum.photos/id/10/800/600",
      fecha: "2022-03-02",
      categoria: "entretenimiento",
    },
    {
      id: 3,
      titulo: "Consectetur Adipiscing",
      descripcion:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imagen: "https://picsum.photos/id/20/800/600",
      fecha: "2022-03-03",
      categoria: "deportes",
    },
    {
      id: 4,
      titulo: "Elit Sed Do Eiusmod",
      descripcion:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imagen: "https://picsum.photos/id/30/800/600",
      fecha: "2022-03-04",
      categoria: "tecnologia",
    },
    {
      id: 5,
      titulo: "Tempor Incididunt",
      descripcion:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imagen: "https://picsum.photos/id/40/800/600",
      fecha: "2022-03-05",
      categoria: "politica",
    },
    {
      id: 6,
      titulo: "Lorem Ipsum Dolor",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagen: "https://picsum.photos/id/50/800/600",
      fecha: "2022-03-06",
      categoria: "entretenimiento",
    },
    {
      id: 7,
      titulo: "Labore Et Dolore",
      descripcion:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "https://picsum.photos/id/60/800/600",
      fecha: "2022-03-07",
      categoria: "deportes",
    },
    {
      id: 8,
      titulo: "Adipiscing Elit",
      descripcion:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imagen: "https://picsum.photos/id/70/800/600",
      fecha: "2022-03-08",
      categoria: "tecnologia",
    },
    {
      id: 9,
      titulo: "Eiusmod Tempor",
      descripcion:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imagen: "https://picsum.photos/id/80/800/600",
      fecha: "2022-03-09",
      categoria: "politica",
    },
  ];

  const evaluaciones = [
    {
      tipo: "examen",
      asignatura: "matemáticas",
      curso: "3º medio",
      contenido: "Ecuación de segundo grado",
      profesor: "Juan Pérez",
      fecha: "2023-03-15",
      horario: "bloque 2",
    },
    {
      titulo: "Ensayo de ciencias 4º medio",
      tipo: "ensayo",
      asignatura: "ciencias",
      curso: "4º medio",
      contenido: "Física: leyes de Newton",
      profesor: "María Gómez",
      fecha: "2023-04-10",
      horario: "bloque 3",
      estado: true,
    },
    {
      titulo: "Actividad de historia 8º básico",
      tipo: "actividad",
      asignatura: "historia",
      curso: "8º básico",
      contenido: "La Independencia de Chile",
      profesor: "Pedro Martínez",
      fecha: "2023-05-20",
      horario: "bloque 5",
      estado: false,
    },
    {
      titulo: "Exposición de lenguaje 7º básico",
      tipo: "exposición",
      asignatura: "lenguaje",
      curso: "7º básico",
      contenido: "El género narrativo",
      profesor: "Ana Ruiz",
      fecha: "2023-06-12",
      horario: "bloque 4",
      estado: false,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Matemáticas",
      curso: "3° Medio A",
      contenido: "Ecuación de segundo grado",
      profesor: "Juan Pérez",
      fecha: "2022-06-15",
      horario: "Bloque 1",
      estado: true,
    },
    {
      tipo: "Actividad",
      asignatura: "Historia",
      curso: "4° Medio B",
      contenido: "Revolución Francesa",
      profesor: "María Rodríguez",
      fecha: "2022-06-20",
      horario: "Bloque 3",
      estado: false,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Lenguaje",
      curso: "2° Medio A",
      contenido: "Comprensión de lectura",
      profesor: "Pedro Gómez",
      fecha: "2022-06-17",
      horario: "Bloque 2",
      estado: true,
    },
    {
      tipo: "Exposición",
      asignatura: "Ciencias",
      curso: "1° Medio B",
      contenido: "Sistema solar",
      profesor: "Ana García",
      fecha: "2022-06-22",
      horario: "Bloque 4",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Inglés",
      curso: "3° Medio B",
      contenido: "Vocabulario",
      profesor: "Jorge Martínez",
      fecha: "2022-06-18",
      horario: "Bloque 5",
      estado: true,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Física",
      curso: "4° Medio A",
      contenido: "Movimiento rectilíneo uniforme",
      profesor: "Laura Flores",
      fecha: "2022-06-21",
      horario: "Bloque 6",
      estado: true,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Matemáticas",
      curso: "1° Medio A",
      contenido: "Geometría",
      profesor: "Camila Ortiz",
      fecha: "2022-06-16",
      horario: "Bloque 7",
      estado: false,
    },
    {
      tipo: "Exposición",
      asignatura: "Artes visuales",
      curso: "2° Medio B",
      contenido: "Expresionismo",
      profesor: "David Castro",
      fecha: "2022-06-23",
      horario: "Bloque 2",
      estado: false,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Matemáticas",
      curso: "3° Medio A",
      contenido: "Ecuación de segundo grado",
      profesor: "Juan Pérez",
      fecha: "2022-06-15",
      horario: "Bloque 1",
      estado: true,
    },
    {
      tipo: "Actividad",
      asignatura: "Historia",
      curso: "4° Medio B",
      contenido: "Revolución Francesa",
      profesor: "María Rodríguez",
      fecha: "2022-06-20",
      horario: "Bloque 3",
      estado: false,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Lenguaje",
      curso: "2° Medio A",
      contenido: "Comprensión de lectura",
      profesor: "Pedro Gómez",
      fecha: "2022-06-17",
      horario: "Bloque 2",
      estado: true,
    },
    {
      tipo: "Exposición",
      asignatura: "Ciencias",
      curso: "1° Medio B",
      contenido: "Sistema solar",
      profesor: "Ana García",
      fecha: "2022-06-22",
      horario: "Bloque 4",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Inglés",
      curso: "3° Medio B",
      contenido: "Vocabulario",
      profesor: "Jorge Martínez",
      fecha: "2022-06-18",
      horario: "Bloque 5",
      estado: true,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Física",
      curso: "4° Medio A",
      contenido: "Movimiento rectilíneo uniforme",
      profesor: "Laura Flores",
      fecha: "2022-06-21",
      horario: "Bloque 6",
      estado: true,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Matemáticas",
      curso: "1° Medio A",
      contenido: "Geometría",
      profesor: "Camila Ortiz",
      fecha: "2022-06-16",
      horario: "Bloque 7",
      estado: false,
    },
    {
      tipo: "Exposición",
      asignatura: "Artes visuales",
      curso: "2° Medio B",
      contenido: "Expresionismo",
      profesor: "David Castro",
      fecha: "2022-06-23",
      horario: "Bloque 2",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Biología",
      curso: "3° Medio A",
      contenido: "Reproducción de plantas",
      profesor: "Cristina Méndez",
      fecha: "2022-06-19",
      horario: "Bloque 3",
      estado: false,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Química",
      curso: "2° Medio B",
      contenido: "Tabla periódica",
      profesor: "Pablo González",
      fecha: "2022-06-24",
      horario: "Bloque 5",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Educación Física",
      curso: "1° Medio B",
      contenido: "Fútbol",
      profesor: "Ricardo Silva",
      fecha: "2022-06-20",
      horario: "Bloque 1",
      estado: true,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Lenguaje",
      curso: "4° Medio A",
      contenido: "Análisis de texto",
      profesor: "Claudia Fernández",
      fecha: "2022-06-17",
      horario: "Bloque 4",
      estado: false,
    },
    {
      tipo: "Exposición",
      asignatura: "Filosofía",
      curso: "3° Medio B",
      contenido: "Ética",
      profesor: "Luisa Vega",
      fecha: "2022-06-21",
      horario: "Bloque 6",
      estado: true,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Historia",
      curso: "2° Medio A",
      contenido: "Conquista de América",
      profesor: "Mario Araya",
      fecha: "2022-06-16",
      horario: "Bloque 2",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Música",
      curso: "4° Medio B",
      contenido: "Composición musical",
      profesor: "Carla Soto",
      fecha: "2022-06-22",
      horario: "Bloque 3",
      estado: true,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Matemáticas",
      curso: "3° Medio A",
      contenido: "Álgebra",
      profesor: "José Villalobos",
      fecha: "2022-06-18",
      horario: "Bloque 5",
      estado: true,
    },
    {
      tipo: "Actividad",
      asignatura: "Inglés",
      curso: "2° Medio A",
      contenido: "Reading comprehension",
      profesor: "John Smith",
      fecha: "2023-03-15",
      horario: "Bloque 2",
      estado: false,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Biología",
      curso: "4° Medio B",
      contenido: "Sistema nervioso",
      profesor: "María Pérez",
      fecha: "2023-04-08",
      horario: "Bloque 4",
      estado: false,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Física",
      curso: "3° Medio A",
      contenido: "Movimiento",
      profesor: "Pedro Morales",
      fecha: "2023-05-20",
      horario: "Bloque 5",
      estado: false,
    },
    {
      tipo: "Exposición",
      asignatura: "Artes Visuales",
      curso: "1° Medio B",
      contenido: "Pintura",
      profesor: "Laura González",
      fecha: "2023-06-07",
      horario: "Bloque 6",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Educación Física",
      curso: "2° Medio B",
      contenido: "Vóleibol",
      profesor: "Carlos Rodríguez",
      fecha: "2023-06-28",
      horario: "Bloque 3",
      estado: false,
    },
    {
      tipo: "Ensayo de prueba estandarizada",
      asignatura: "Historia",
      curso: "4° Medio A",
      contenido: "Revolución Francesa",
      profesor: "Patricia Torres",
      fecha: "2023-07-14",
      horario: "Bloque 1",
      estado: false,
    },
    {
      tipo: "Examen escrito",
      asignatura: "Química",
      curso: "3° Medio B",
      contenido: "Tabla periódica",
      profesor: "Andrés Romero",
      fecha: "2023-08-02",
      horario: "Bloque 2",
      estado: false,
    },
    {
      tipo: "Actividad",
      asignatura: "Matemáticas",
      curso: "1° Medio A",
      contenido: "Geometría",
      profesor: "Ana Fernández",
      fecha: "2023-08-23",
      horario: "Bloque 6",
      estado: false,
    },
  ];
  const actividades = [
    {
      titulo: "Campeonato de Fútbol 2023",
      coordinadores: ["Juan Perez", "María García"],
      descripcion:
        "Participa en el campeonato de fútbol escolar 2023, donde podrás demostrar tus habilidades en la cancha y competir con tus amigos.",
      imagenes: [
        "https://picsum.photos/600/450?aspect=4:3",
        "https://picsum.photos/400/300?aspect=4:3",
        "https://picsum.photos/800/600?aspect=4:3",
      ],
    },
    {
      titulo: "Torneo de Baloncesto 2023",
      coordinadores: ["Ana Rodriguez", "Luis Gomez"],
      descripcion:
        "Únete al torneo escolar de baloncesto 2023 y compite con otros equipos de la escuela. Mejora tus habilidades en el juego y diviértete.",
      imagenes: [
        "https://picsum.photos/500/375?aspect=4:3",
        "https://picsum.photos/700/525?aspect=4:3",
        "https://picsum.photos/600/450?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Ajedrez",
      coordinadores: ["Sofía Torres"],
      descripcion:
        "Aprende a jugar ajedrez y mejora tus habilidades con nuestro club escolar de ajedrez. ¡Ven y diviértete!",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Ajedrez",
      coordinadores: ["Sofía Torres"],
      descripcion:
        "Aprende a jugar ajedrez y mejora tus habilidades con nuestro club escolar de ajedrez. ¡Ven y diviértete!",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Taller de Arte",
      coordinadores: ["Mónica Ramírez", "Pedro García"],
      descripcion:
        "Explora tu creatividad con nuestro taller de arte. Aprenderás técnicas de dibujo, pintura y más.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Equipo de Fútbol",
      coordinadores: ["Carlos López", "María Fernández"],
      descripcion:
        "Únete a nuestro equipo de fútbol y mejora tus habilidades mientras te diviertes con tus compañeros.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Debate",
      coordinadores: ["Luisa González", "Javier Martínez"],
      descripcion:
        "Aprende a argumentar y debatir de manera efectiva con nuestro club de debate.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Grupo de Teatro",
      coordinadores: ["Ana Ramírez", "Ricardo Pérez"],
      descripcion:
        "Desarrolla tus habilidades de actuación y creatividad con nuestro grupo de teatro.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Campeonato de Fútbol 2023",
      coordinadores: ["Juan Perez", "María García"],
      descripcion:
        "Participa en el campeonato de fútbol escolar 2023, donde podrás demostrar tus habilidades en la cancha y competir con tus amigos.",
      imagenes: [
        "https://picsum.photos/600/450?aspect=4:3",
        "https://picsum.photos/400/300?aspect=4:3",
        "https://picsum.photos/800/600?aspect=4:3",
      ],
    },
    {
      titulo: "Torneo de Baloncesto 2023",
      coordinadores: ["Ana Rodriguez", "Luis Gomez"],
      descripcion:
        "Únete al torneo escolar de baloncesto 2023 y compite con otros equipos de la escuela. Mejora tus habilidades en el juego y diviértete.",
      imagenes: [
        "https://picsum.photos/500/375?aspect=4:3",
        "https://picsum.photos/700/525?aspect=4:3",
        "https://picsum.photos/600/450?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Ajedrez",
      coordinadores: ["Sofía Torres"],
      descripcion:
        "Aprende a jugar ajedrez y mejora tus habilidades con nuestro club escolar de ajedrez. ¡Ven y diviértete!",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Ajedrez",
      coordinadores: ["Sofía Torres"],
      descripcion:
        "Aprende a jugar ajedrez y mejora tus habilidades con nuestro club escolar de ajedrez. ¡Ven y diviértete!",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Taller de Arte",
      coordinadores: ["Mónica Ramírez", "Pedro García"],
      descripcion:
        "Explora tu creatividad con nuestro taller de arte. Aprenderás técnicas de dibujo, pintura y más.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Equipo de Fútbol",
      coordinadores: ["Carlos López", "María Fernández"],
      descripcion:
        "Únete a nuestro equipo de fútbol y mejora tus habilidades mientras te diviertes con tus compañeros.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Club de Debate",
      coordinadores: ["Luisa González", "Javier Martínez"],
      descripcion:
        "Aprende a argumentar y debatir de manera efectiva con nuestro club de debate.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
    {
      titulo: "Grupo de Teatro",
      coordinadores: ["Ana Ramírez", "Ricardo Pérez"],
      descripcion:
        "Desarrolla tus habilidades de actuación y creatividad con nuestro grupo de teatro.",
      imagenes: [
        "https://picsum.photos/550/412?aspect=4:3",
        "https://picsum.photos/650/487?aspect=4:3",
        "https://picsum.photos/450/337?aspect=4:3",
      ],
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={
              <Inicio
                evaluaciones={evaluaciones}
                actividades={actividades}
                news={news}
              />
            }
          />
          <Route path="Nosotros" element={<Nosotros />}>
            <Route path="PalabrasDirector" element={<PalabrasDirector />} />
            <Route path="ProyectoEducativo" element={<ProyectoEducativo />} />
            <Route
              path="OrganigramaInstitucional"
              element={<OrgInstitucional />}
            />
            <Route path="CATI" element={<EquipoCATI />} />
            <Route path="PIE" element={<EquipoPIE />} />
          </Route>
          <Route path="ComEdu" element={<ComEdu />}>
            <Route path="CentroPadres" element={<CentroDePadres />} />
            <Route path="CentroEstudiantes" element={<CentroDeEstudiantes />} />
          </Route>
          <Route path="Noticias" element={<Noticias news={news} />} />
          <Route
            path="CalendarioAcademico"
            element={<CalendarioAcademico evaluaciones={evaluaciones} />}
          />
          <Route
            path="ActividadesExtracurriculares"
            element={<ActividadesExtracurriculares actividades={actividades} />}
          />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
